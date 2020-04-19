/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.EdgeService;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author YASH
 */
@FeignClient("corona-service")
public interface ICoronaClient {
    
    @RequestMapping("/corona") 
    CollectionModel<Corona> readCoronas();
}
