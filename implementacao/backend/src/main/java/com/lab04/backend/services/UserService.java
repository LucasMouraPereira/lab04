package com.lab04.backend.services;

import com.lab04.backend.dtos.UserDTO;
import com.lab04.backend.models.User;
import com.lab04.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User createUser(UserDTO newUserDTO){
        User newUser = new User(newUserDTO);
        return userRepository.save(newUser);
    }

    public User getUser(Integer id){
        return userRepository.getById(id);
    }

    public User getUser(String email, String password){
        return userRepository.getUserByEmailAndPassword(email, password);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUserByIdAndType(Integer id, String type){
        return userRepository.getUserByIdAndAndType(id, type);
    }

    public List<User> getUsersByType(String type) {
        return userRepository.getUsersByType(type);
    }

    public Boolean updatePassword(String password, Integer id){
        try{
            userRepository.updatePassword(password, id);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    public Boolean deleteUser(Integer id) {
        try {
            userRepository.deleteById(id);
            return true;
        } catch (EmptyResultDataAccessException e){
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
