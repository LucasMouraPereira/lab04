package com.lab04.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;
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
    private Calendar lastUpdate;

    @Column(name = "balance_value", nullable = false)
    private Float balanceValue;

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    private User user;

    public CoinBalance() {
    }

    public CoinBalance(Integer id, Calendar lastUpdate, Float balanceValue, User user) {
        this.id = id;
        this.lastUpdate = lastUpdate;
        this.balanceValue = balanceValue;
        this.user = user;
    }
}
