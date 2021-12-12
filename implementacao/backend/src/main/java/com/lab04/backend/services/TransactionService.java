package com.lab04.backend.services;

import com.lab04.backend.dtos.TransactionDTO;
import com.lab04.backend.models.Transaction;
import com.lab04.backend.repositories.TransactionRepository;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {

    @Autowired
    private CoinBalanceService coinBalanceService;

    @Autowired
    private TransactionRepository transactionRepository;

    public Transaction sendCoins(TransactionDTO newTransactionDTO) throws ServiceException{
        try{
            coinBalanceService.updateCoinBalanceByTransaction(newTransactionDTO);
            return transactionRepository.save(new Transaction(newTransactionDTO));
        }catch (ServiceException se){
            throw new ServiceException(se.getMessage());
        }
    }
}
