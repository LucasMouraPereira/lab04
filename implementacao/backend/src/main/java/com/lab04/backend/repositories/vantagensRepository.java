package com.lab04.backend.repositories;

import com.lab04.backend.models.vantagens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface vantagensRepository extends JpaRepository <vantagens, Integer>{

    void createvantagempartes(String nome,String descriçao,float preco);

    void createvantagem(vantagen v);
   

    void UPDATE(String nome, Integer cont);
}
