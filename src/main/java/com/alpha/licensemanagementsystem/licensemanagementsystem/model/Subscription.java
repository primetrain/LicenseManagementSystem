package com.alpha.licensemanagementsystem.licensemanagementsystem.model;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Data
@Entity
public class Subscription implements Serializable {

    @Id @GeneratedValue(strategy= GenerationType.AUTO)
    private Long ID;

    private Date start;

    private Date end;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "plan_id")
    private Plan plan;

    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;
}

