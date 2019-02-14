package com.alpha.licensemanagementsystem.licensemanagementsystem.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;
    private String name;
    private String username;
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "created_by")
    private List<User> users;
}