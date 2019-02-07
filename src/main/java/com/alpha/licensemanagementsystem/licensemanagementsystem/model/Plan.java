package com.alpha.licensemanagementsystem.licensemanagementsystem.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID;

    private String description;

    @OneToMany(mappedBy = "plan")
    private List<Subscription> subscriptions;

    @ManyToMany(mappedBy = "plans")
    private List<Product> products;
}
