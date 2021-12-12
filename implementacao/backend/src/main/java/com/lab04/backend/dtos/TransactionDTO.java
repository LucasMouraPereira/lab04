package com.lab04.backend.dtos;

import com.lab04.backend.models.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;

@Getter
@Setter
public class TransactionDTO {

    private Integer id;
    private String description;
    private Calendar createdAt;
    private Float value;
    private User from;
    private User to;

    public TransactionDTO(Integer id, String description, Calendar createdAt, Float value, User from, User to) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.value = value;
        this.from = from;
        this.to = to;
    }
}
