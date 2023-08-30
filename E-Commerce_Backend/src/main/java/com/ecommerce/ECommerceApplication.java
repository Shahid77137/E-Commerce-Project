package com.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ECommerceApplication {

	public static void main(String[] args) {
		
		System.out.println();
		System.out.println("                                  -=-=-=-=-=-=-=-=-=-=-=-=-=- Application is Starting -=-=-=-=-=-=-=-=-=-=-=-=-=-");
		SpringApplication.run(ECommerceApplication.class, args);
		
		System.out.println();
		System.out.println("                                  -=-=-=-=-=-=-=-=-=-=-=-=-=- Application is Working Fine -=-=-=-=-=-=-=-=-=-=-=-=-=-");
	}

}
