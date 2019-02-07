package com.alpha.licensemanagementsystem.licensemanagementsystem.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID;
    private String name;
    private String username;
    private String password;

    @ManyToOne
    @JoinColumn(name = "created_by")
    private Client created_by;

    @OneToMany(mappedBy = "user")
    private List<Subscription> subscriptions;
}