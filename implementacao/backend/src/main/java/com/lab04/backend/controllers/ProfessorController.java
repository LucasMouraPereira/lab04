package com.lab04.backend.controllers;

import com.lab04.backend.models.User;
import com.lab04.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("professor")
public class ProfessorController {

    private static final String PROFESSOR = "professor";

    @Autowired
    UserService userService;

    @GetMapping(path = "/")
    public ResponseEntity<List<User>> getAllProfessors() {
        List<User> professors = userService.getUsersByType(PROFESSOR);

        return ResponseEntity.ok(professors);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<User> getProfessorById(@PathVariable Integer id) {
        User professor = userService.getUserByIdAndType(id, PROFESSOR);

        if (professor == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(professor);
        }
    }

}
