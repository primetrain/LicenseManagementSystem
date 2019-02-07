package com.alpha.licensemanagementsystem.licensemanagementsystem.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID;

    private String language;

    @ManyToMany
    @JoinTable(name = "language_module",
                joinColumns = { @JoinColumn(name = "language_id") },
                inverseJoinColumns = { @JoinColumn(name = "module_id")})
    private List<Module> modules;
}
