package com.lab04.backend.repositories;

import com.lab04.backend.models.Benefits;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BenefitsRepository extends JpaRepository<Benefits, Integer>{

    Benefits getBenefitsByNameAndValue(String name, Double value);

    List<Benefits> getAllByIdIsNotNull();

//    @Modifying
//    @Transactional
//    @Query("UPDATE Benefits SET name = ?1 WHERE id = ?2")
//    void updatePassword(String name, Integer id);

    void deleteBenefitsById(Integer id);
}
