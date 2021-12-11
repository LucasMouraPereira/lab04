package com.lab04.backend.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToOne;
import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    public CoinBalance() {
    }

    public CoinBalance(Integer id, Date lastUpdate, Float balanceNumber) {
        this.id = id;
        this.lastUpdate = lastUpdate;
        this.balanceNumber = balanceNumber;
    }
}
