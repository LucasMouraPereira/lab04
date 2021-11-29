package com.lab04.backend.controllers;

//import com.lab04.backend.dtos.UserDTO;
import com.lab04.backend.models.Moeda;
import com.lab04.backend.services.TrasiçaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
@Controller
@CrossOrigin(origins = "*")
public class transaçaoControler {


@Autowired
TrasiçaoService trasiçaoServices;
@PostMapping(path = "/transação")
public ResponseEntity<Object> signUpCompany(@RequestBody Moeda dinheiro) {
    userDTO.setType(COMPANY);
    trasiçaoServices.createtrasiçao(dinheiro)

    if (createdUser == null) {
        return ResponseEntity.badRequest().build();
    } else {
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createdUser.getId())
                .toUri();
        return ResponseEntity.created(uri)
                .body(createdUser);
    }
}

}