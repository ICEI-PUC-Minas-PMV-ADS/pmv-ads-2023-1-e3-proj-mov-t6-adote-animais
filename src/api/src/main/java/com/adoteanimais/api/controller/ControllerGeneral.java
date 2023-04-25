package com.adoteanimais.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerGeneral {

    @GetMapping(path = "/")
    public String online(){
        return "Online!";
    }
}
