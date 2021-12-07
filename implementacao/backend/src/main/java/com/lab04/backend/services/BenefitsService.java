package com.lab04.backend.services;

import com.lab04.backend.dtos.BenefitsDTO;
import com.lab04.backend.models.Benefits;
import com.lab04.backend.repositories.BenefitsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BenefitsService {
    @Autowired
    private BenefitsRepository benefitsRepository;

    public Benefits createBenefits(BenefitsDTO newBenefitsDTO){
        Benefits newBenefits = new Benefits(newBenefitsDTO);
        return benefitsRepository.save(newBenefits);
    }
}
