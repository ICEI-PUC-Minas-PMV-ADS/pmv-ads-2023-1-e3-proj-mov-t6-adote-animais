package com.adoteanimais.api.service;

import com.adoteanimais.api.repository.PetsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PetsService {

    private final PetsRepository petsRepository;

    public PetsService(PetsRepository petsRepository) {
        this.petsRepository = petsRepository;
    }

    public ResponseEntity<?> listPets() {
        return petsRepository.
    }
}
