package com.lab04.backend.controllers;

import com.lab04.backend.models.CoinBalance;
import com.lab04.backend.models.User;
import com.lab04.backend.services.CoinBalanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("coin_balance")
public class CoinBalanceController {

    @Autowired
    CoinBalanceService coinBalanceService;

    @GetMapping(path = "/{userId}")
    public ResponseEntity<Object> getCoinBalance(@PathVariable Integer userId) {
        User user = new User();
        user.setId(userId);

        CoinBalance coinBalance = coinBalanceService.getCoinBalance(user);

        if (coinBalance == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(coinBalance);
        }
    }

}
