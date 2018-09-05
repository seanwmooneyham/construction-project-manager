package com.constructionprojectmanager.rest.tool;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping(path = "/tools")
public class ToolController {
    private Logger logger = LoggerFactory.getLogger(ToolController.class);

    @Autowired
    private ToolRepository toolRepository;


    @GetMapping("/list") // View all tools
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public Iterable<Tool> getAllTools() {
        return toolRepository.findAll();
    }

    @DeleteMapping("/edit/{id}")
    @ResponseBody
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Tool> deleteTool(@PathVariable("id") long id) {
        Optional<Tool> dbTool = toolRepository.findById(id);
        if(dbTool.isPresent()) {
            toolRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
