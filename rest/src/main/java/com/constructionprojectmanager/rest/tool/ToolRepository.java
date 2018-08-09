package com.constructionprojectmanager.rest.tool;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.Table;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
@Table(name="tool")
public interface ToolRepository extends CrudRepository<Tool, Long> {
}








