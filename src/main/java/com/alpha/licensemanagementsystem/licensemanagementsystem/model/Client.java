package com.alpha.licensemanagementsystem.licensemanagementsystem.model;


import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID;
    private String name;
    private String username;
    private String password;

    @OneToMany(mappedBy = "created_by")
    private List<User> users;
}