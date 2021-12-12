package com.lab04.backend.repositories;

import com.lab04.backend.models.CoinBalance;
import com.lab04.backend.models.Transaction;
import com.lab04.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Calendar;


public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}
