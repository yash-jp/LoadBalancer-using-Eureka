package com.example.CoronaService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class CoronaServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoronaServiceApplication.class, args);
	}
}

        @Component
class ItemInitializer implements CommandLineRunner{
    
    private final ICoronaRepository repo;
    
    ItemInitializer(ICoronaRepository _repo){
        this.repo=_repo;
    }
    
    @Override
    public void run(String... args) throws Exception {
        for(int i=1;i<=5;i++){
            Corona c = new Corona();
            c.setCountry("Country - "+i);
            c.setCases(20*i);
//            save to repository
            repo.save(c);
        }
        
        repo.findAll().forEach(System.out::println);
    }

}
