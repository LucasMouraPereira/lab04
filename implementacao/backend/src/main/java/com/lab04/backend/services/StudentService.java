package com.lab04.backend.services;

import com.lab04.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    private static final String STUDENT = "student";

    @Autowired
    private UserRepository userRepository;
    

}
