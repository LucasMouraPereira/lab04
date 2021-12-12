package com.lab04.backend.services;

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
        hasValidCoinValue(value, user);
        coinBalanceRepository.updateCoinBalanceByUser(Calendar.getInstance(), value, user);
    }

    public void hasValidCoinValue(Float value, User user) throws ServiceException{
        Float currentValue = getCoinBalance(user).getBalanceValue();
       if (currentValue + value < 0){
           throw new ServiceException("Valor " + value + " inválido | O saldo não pode ser negativo");
       }
    }
}
