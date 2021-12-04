package com.lab04.backend.repositories;

import com.lab04.backend.models.vendas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository <Vendas, Integer>{

    User getUserByEmailAndPassword(String nome,String descriçao,Moeda preço);

   
}
