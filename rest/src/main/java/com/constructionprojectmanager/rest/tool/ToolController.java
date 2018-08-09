package com.constructionprojectmanager.rest.tool;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


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
}
