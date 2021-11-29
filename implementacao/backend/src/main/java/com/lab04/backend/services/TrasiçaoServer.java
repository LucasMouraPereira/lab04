package com.lab04.backend.services;


import com.lab04.backend.models.Moeda;
import com.lab04.backend.repositories.TransiçaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class trasiçaoService {

    @Autowired
    private TransiçaoRepository TransiçaoRepository;


    public trasiçao createtrasiçao(Moeda newMoeda){
        trasiçao newtrasiçao = new trasiçao(newMoeda);
        return TransiçaoRepository.save(newtrasiçao);
    }

    public trasiçao gettrasiçao(Interger Ano, long Lastro){
        return TransiçaoRepository.gettrasiçaoByEmailAndPassword(Ano, Lastro);
    }

    /*public trasiçao gettrasiçao(Integer id){
        return TransiçaoRepository.getById(id);
    }

    public Boolean updatePassword(String password, Integer id){
        try{
            TransiçaoRepository.updatePassword(password, id);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    public Boolean deletetrasiçao(Integer id) {
        try {
            TransiçaoRepository.deleteById(id);
            return true;
        } catch (EmptyResultDataAccessException e){
            return true;
        }catch (Exception e){
            return false;
        }
    }*/
}
