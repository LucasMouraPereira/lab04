package com.lab04.backend.controllers;

import com.lab04.backend.dtos.BenefitsDTO;
import com.lab04.backend.models.Benefits;
import com.lab04.backend.services.BenefitsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;


@Controller
@CrossOrigin(origins = "*")
@RequestMapping("benefits")
public class BenefitsController {

    @Autowired
    BenefitsService benefitsService;

    @PostMapping(path = "/create")
    public ResponseEntity<Object> createBenefits(@RequestBody BenefitsDTO benefitsDTO) {
        Benefits createdBenefits = benefitsService.createBenefits(benefitsDTO);

        if (createdBenefits == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(createdBenefits);
        }
    }
    
    @GetMapping(path = "/")
    public ResponseEntity<List<Benefits>> getAllBenefits() {
        List<Benefits> bene = benefitsService.ListBenefits();
        return ResponseEntity.ok(bene);
    }

}