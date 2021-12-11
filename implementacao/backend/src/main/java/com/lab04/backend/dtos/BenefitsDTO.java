package com.lab04.backend.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BenefitsDTO {

    private Integer id;
    private String name;
    private Double value;

    public BenefitsDTO(Integer id, String name, Double value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }
}
