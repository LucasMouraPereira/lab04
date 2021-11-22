package com.lab04.backend.controllers;

import com.lab04.backend.dtos.UserDTO;
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
public class UserController {

    private static final String STUDENT = "student";
    private static final String COMPANY = "company";

    @Autowired
    UserService userService;

    @PostMapping(path = "/login")
    public ResponseEntity<Object> signIn(@RequestBody UserDTO userDTO) {
        User user = userService.getUser(userDTO.getEmail() ,userDTO.getPassword());

        if (user == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(user);
        }
    }

    @PostMapping(path = "/signUp/student")
    public ResponseEntity<Object> signUpStudent(@RequestBody UserDTO userDTO) {
        userDTO.setType(STUDENT);
        User createdUser = userService.createUser(userDTO);

        if (createdUser == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(createdUser);
        }
    }

    @PostMapping(path = "/signUp/company")
    public ResponseEntity<Object> signUpCompany(@RequestBody UserDTO userDTO) {
        userDTO.setType(COMPANY);
        User createdUser = userService.createUser(userDTO);

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

    @PutMapping(path = "/updatePassword/{id}")
    public ResponseEntity<Object> updatePassword(@PathVariable Integer id, @RequestBody UserDTO userDTO) {
        Boolean hasUpdated = userService.updatePassword(userDTO.getPassword(), id);

        if (hasUpdated) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping(path = "/deleteUser/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable Integer id) {
        Boolean hasDeleted = userService.deleteUser(id);

        if (hasDeleted) {
            return ResponseEntity.ok(id);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
