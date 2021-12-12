package com.lab04.backend.controllers;

import com.lab04.backend.dtos.TransactionDTO;
import com.lab04.backend.models.Transaction;
import com.lab04.backend.services.TransactionService;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("transaction")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @PostMapping(path = "/create")
    public ResponseEntity<Object> sendCoins(@RequestBody TransactionDTO transactionDTO) {
        transactionDTO.setCreatedAt(Calendar.getInstance());

        try{
            Transaction transaction = transactionService.sendCoins(transactionDTO);

            if (transaction == null) {
                return ResponseEntity.notFound().build();
            } else {
                return ResponseEntity.ok(transaction);
            }
        }catch (ServiceException se){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(se.getMessage());
        }
    }

}
