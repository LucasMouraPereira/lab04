package com.lab04.backend.repositories;

import com.lab04.backend.models.CoinBalance;
import com.lab04.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Calendar;


public interface CoinBalanceRepository extends JpaRepository<CoinBalance, Integer> {

    CoinBalance getCoinBalanceByUser(User user);

    @Modifying
    @Transactional
    @Query("UPDATE CoinBalance SET lastUpdate = ?1, balanceValue = ?2 WHERE user = ?3")
    void updateCoinBalanceByUser(Calendar lastUpdate, Float balanceValue, User user);
}
