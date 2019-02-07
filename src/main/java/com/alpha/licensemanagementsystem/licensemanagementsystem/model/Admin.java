package com.alpha.licensemanagementsystem.licensemanagementsystem.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Admin {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID;
    private String name;
    private String username;
    private String password;

}
