package com.lab04.backend.models;

import com.lab04.backend.dtos.TransactionDTO;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;

@Getter
@Setter
@Entity
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "created_at", nullable = false)
    private Calendar createdAt;

    @Column(name = "value", nullable = false)
    private Float value;

    @ManyToOne(fetch = FetchType.LAZY)
    private User from;

    @ManyToOne(fetch = FetchType.LAZY)
    private User to;


    public Transaction() {
    }

    public Transaction(TransactionDTO transactionDTO) {
        this.id = transactionDTO.getId();
        this.description = transactionDTO.getDescription();
        this.createdAt = transactionDTO.getCreatedAt();
        this.from = transactionDTO.getFrom();
        this.to = transactionDTO.getTo();
        this.value = transactionDTO.getValue();
    }

    public Transaction(Integer id, String description, Calendar createdAt, User from, User to, Float value) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.from = from;
        this.to = to;
        this.value = value;
    }
}
