package com.constructionprojectmanager.rest.material;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/material")
public class MaterialController {
    private Logger logger = LoggerFactory.getLogger(MaterialController.class);


    @Autowired
    private MaterialRepository materialRepository;


    @GetMapping("/list")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public Iterable<Material> getAllTools() {
        return materialRepository.findAll();
    }
}
