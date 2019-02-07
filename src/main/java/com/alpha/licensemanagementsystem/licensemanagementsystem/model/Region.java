package com.alpha.licensemanagementsystem.licensemanagementsystem.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID;

    private String country;

    @OneToMany(mappedBy = "region")
    private List<Subscription> subscriptions;
}
