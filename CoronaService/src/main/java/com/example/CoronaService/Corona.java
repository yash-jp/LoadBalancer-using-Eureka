package com.example.CoronaService;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author YASH
 */
@Data
@Entity
public class Corona {
    private String country;
    private int cases;
    
    @GeneratedValue
    @Id
    private long id;
}
