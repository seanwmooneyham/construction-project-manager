package com.constructionprojectmanager.rest.tool;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.inject.Inject;
import java.util.Optional;


@RestController
@RequestMapping(path = "/tools")
public class ToolController {
    private Logger logger = LoggerFactory.getLogger(ToolController.class);


    private final ToolRepository toolRepository;

    // constructor injection is recommended over field injection
    @Inject
    public ToolController(ToolRepository toolRepository) {
        this.toolRepository = toolRepository;
    }

    // view all tools
    @GetMapping("/list")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public Iterable<Tool> getAllTools() {
        return toolRepository.findAll();
    }

    // add new tool to db
    @PostMapping("/list")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public Tool addNewTool(@RequestBody Tool tool) {
        Tool newTool = new Tool(tool.getName());
        return toolRepository.save(newTool);
    }

    // delete tool by id
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

    //edit tool by id
    @PutMapping("/edit/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public ResponseEntity<Tool> updateTool(@PathVariable("id") long id, @RequestBody Tool tool) {
        Optional<Tool> dbTool = toolRepository.findById(id);
        dbTool.get().setName(tool.getName());
        return new ResponseEntity<>(toolRepository.save(dbTool.get()), HttpStatus.OK);

    }
}
