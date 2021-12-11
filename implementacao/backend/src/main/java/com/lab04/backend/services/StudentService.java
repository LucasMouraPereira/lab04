package com.lab04.backend.services;

import com.lab04.backend.models.Student;
import com.lab04.backend.models.User;
import com.lab04.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private static final String STUDENT = "student";

    @Autowired
    private UserRepository userRepository;
    

}
