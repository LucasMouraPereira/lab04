package com.lab04.backend.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "coin_balance")
public class CoinBalance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "last_update", nullable = false)
    private Date lastUpdate;

    @Column(name = "balance_number", nullable = false)
    private Float balanceNumber;

    public CoinBalance() {
    }

    public CoinBalance(Integer id, Date lastUpdate, Float balanceNumber) {
        this.id = id;
        this.lastUpdate = lastUpdate;
        this.balanceNumber = balanceNumber;
    }
}
