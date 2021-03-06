package com.constructionprojectmanager.rest.tool;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.Optional;


@RestController
@RequestMapping(path = "/api/tools")
public class ToolController {
    // using field injection for this particular class
    @Autowired
    private ToolRepository toolRepository;

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
    public ResponseEntity<Tool> addNewTool(@RequestBody Tool tool) {
        Tool newTool = new Tool(tool.getName());
        return new ResponseEntity<>(toolRepository.save(newTool), HttpStatus.CREATED);
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
