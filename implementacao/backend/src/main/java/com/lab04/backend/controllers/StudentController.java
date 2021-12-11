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
@RequestMapping("student")
public class StudentController {

    private static final String STUDENT = "student";

    @Autowired
    UserService userService;

    @GetMapping(path = "/")
    public ResponseEntity<List<User>> getAllStudents() {
        List<User> students = userService.getUsersByType(STUDENT);

        return ResponseEntity.ok(students);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<User> getStudentById(@PathVariable Integer id) {
        User student = userService.getUserByIdAndType(id, STUDENT);

        if (student == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(student);
        }
    }

}
