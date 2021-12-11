package com.lab04.backend.repositories;

import com.lab04.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository<User, Integer>{
//    @Query(value = "SELECT ID, NAME, EMAIL, PASSWORD, TYPE FROM USER u WHERE u.EMAIL = ?1 AND u.PASSWORD = ?2", nativeQuery = true)
//    List<Object> login(String email, String password);

    User getUserByEmailAndPassword(String email, String password);

    @Modifying
    @Transactional
    @Query("UPDATE User SET password = ?1 WHERE id = ?2")
    void updatePassword(String password, Integer id);

    void deleteUserById(Integer id);
}
