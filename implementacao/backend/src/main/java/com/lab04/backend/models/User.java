package com.lab04.backend.models;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.lab04.backend.dtos.UserDTO;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "email", length = 100, nullable = false)
    private String email;

    @Column(name = "password", length = 100, nullable = false)
    private String password;

    @Column(name = "type", length = 100, nullable = false)
    private String type;

    @JsonManagedReference
    @OneToOne(mappedBy = "user", fetch = FetchType.EAGER)
    private CoinBalance coinBalance;

    public User() {
    }

    public User(UserDTO userDTO) {
        this.id = userDTO.getId();
        this.email = userDTO.getEmail();
        this.password = userDTO.getPassword();
        this.type = userDTO.getType();
    }

    public User(Integer id, String email, String password, String type) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.type = type;
    }

}
