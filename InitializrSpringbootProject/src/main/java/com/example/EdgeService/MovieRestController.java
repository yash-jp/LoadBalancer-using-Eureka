/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.EdgeService;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author YASH
 */
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MovieRestController {
    @Autowired
    private IMovieClient client;
    @Autowired
    private ICoronaClient iCoronaClient;
    
    
    
    @GetMapping("/movies")
    public Collection<Movie> getMovies(){
        return client.readMovies().getContent().stream().collect(Collectors.toList());
    }
    
    
    @GetMapping("/corona")
    @HystrixCommand(fallbackMethod = "coronaGoBack")
    public Collection<Corona> readCoronas(){
        return iCoronaClient.readCoronas().getContent().stream().collect(Collectors.toList());
    }
    
   public Collection<Corona> coronaGoBack(){
        List<Corona> coronas=new ArrayList<>();
        Corona c=new Corona();
        c.setCountry("CORONA GO BACK");
        coronas.add(c);
        return coronas;
    }
    
    
}
