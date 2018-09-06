package com.constructionprojectmanager.rest.material;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.inject.Inject;
import java.util.Optional;


@RestController
@RequestMapping(path = "/material")
public class MaterialController {

    private final MaterialRepository materialRepository;

    // constructor injection is recommended over field injection '@autowired'
    @Inject
    public MaterialController(MaterialRepository materialRepository) {
        this.materialRepository = materialRepository;
    }

    // view all materials
    @GetMapping("/list")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public Iterable<Material> getAllMaterials() {
        return materialRepository.findAll();
    }

    // add new material to db
    @PostMapping("/list")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public Material addNewMaterial(@RequestBody Material material) {
        Material newMaterial = new Material(material.getName());
        return materialRepository.save(newMaterial);
    }

    // delete material by id
    @DeleteMapping("/edit/{id}")
    @ResponseBody
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Material> deleteMaterial(@PathVariable("id") long id) {
        Optional<Material> dbMaterial = materialRepository.findById(id);
        if(dbMaterial.isPresent()) {
            materialRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    //edit material by id
    @PutMapping("/edit/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public ResponseEntity<Material> updateMaterial(@PathVariable("id") long id, @RequestBody Material material) {
        Optional<Material> dbMaterial = materialRepository.findById(id);
        dbMaterial.get().setName(material.getName());
        return new ResponseEntity<>(materialRepository.save(dbMaterial.get()), HttpStatus.OK);

    }
}
