/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.CoronaService;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author YASH
 */
@RepositoryRestResource(path = "corona")
public interface ICoronaRepository extends JpaRepository<Corona, Long> {
    
}
