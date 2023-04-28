package com.adoteanimais.api.rest;

import com.adoteanimais.api.service.PetsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "/api/pets")
public class PetsRest {

    private final PetsService petsService;

    public PetsRest(PetsService petsService) {
        this.petsService = petsService;
    }


    @GetMapping(path = "/")
    public ResponseEntity<?> listPets(){
        return petsService.listPets();
    }

}
