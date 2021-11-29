package com.lab04.backend.repositories;

import com.lab04.backend.models.Moeda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface TrasiçãoRepository extends JpaRepository<Trasição, Integer>{

    Trasição getTrasição(long Lastro, Integer Ano);

    
   
}