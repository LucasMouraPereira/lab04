package com.lab04.backend.controllers;

import com.lab04.backend.dtos.vantagens;
import com.lab04.backend.models.User;
import com.lab04.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@Controller
@CrossOrigin(origins = "*")
public class empresacontroller extends UserController {

    @Autowired
    vantagensFactory Vantagem;

    @PostMapping(path = "/signUp/student")
    public ResponseEntity<Object> create (@RequestBody vantagens vantagen) {
        
    Vantagem.Gerarvantagens(vantagen);


    }
    @PostMapping(path = "/signUp/student")
    public ResponseEntity<Object> UPDATE (@RequestBody vantagens vantagen,Integer quant) {
        
        Vantagem.Updatevantagens(vantagen quant);


    }



}