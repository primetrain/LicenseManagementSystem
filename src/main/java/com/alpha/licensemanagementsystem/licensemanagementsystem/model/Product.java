package com.alpha.licensemanagementsystem.licensemanagementsystem.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID;

    private String name;

    private String description;

    @OneToMany(mappedBy = "product")
    private List<Module> modules;

    @ManyToMany
    @JoinTable(name = "plan_product",
            joinColumns = { @JoinColumn(name = "product_id") },
            inverseJoinColumns = { @JoinColumn(name = "plan_id") })
    private List<Plan> plans;
}

