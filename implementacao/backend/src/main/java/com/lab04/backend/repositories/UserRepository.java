package com.lab04.backend.repositories;

import com.lab04.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository<User, Integer>{

    User getUserByEmailAndPassword(String email, String password);

    @Modifying
    @Transactional
    @Query("UPDATE User SET password = ?1 WHERE id = ?2")
    void updatePassword(String password, Integer id);

    void deleteUserById(Integer id);
}
