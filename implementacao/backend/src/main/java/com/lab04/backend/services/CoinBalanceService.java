package com.lab04.backend.services;

import com.lab04.backend.dtos.TransactionDTO;
import com.lab04.backend.models.CoinBalance;
import com.lab04.backend.models.User;
import com.lab04.backend.repositories.CoinBalanceRepository;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;

@Service
public class CoinBalanceService {

    @Autowired
    private CoinBalanceRepository coinBalanceRepository;

    public CoinBalance getCoinBalance(User user){
        return coinBalanceRepository.getCoinBalanceByUser(user) ;
    }

    public void updateCoinBalanceByUser(Float value, User user) throws ServiceException{
        coinBalanceRepository.updateCoinBalanceByUser(Calendar.getInstance(), value, user);
    }

    public void updateCoinBalanceByTransaction(TransactionDTO newTransactionDTO) throws ServiceException{
        try{
            hasNegativeBalance(newTransactionDTO.getValue(), newTransactionDTO.getFrom());

            updateCoinBalanceByUser(-Math.abs(newTransactionDTO.getValue()), newTransactionDTO.getFrom());
            updateCoinBalanceByUser(newTransactionDTO.getValue(), newTransactionDTO.getTo());
        }catch (ServiceException se){
            throw new ServiceException(se.getMessage());
        }
    }

    public void hasNegativeBalance(Float value, User user) throws ServiceException{
        Float currentValue = getCoinBalance(user).getBalanceValue();
       if (currentValue < value){
           throw new ServiceException("Valor " + value + " inválido | O saldo não pode ser negativo");
       }
    }
}
