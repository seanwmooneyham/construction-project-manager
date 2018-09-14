package com.constructionprojectmanager.rest.announcement;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.Table;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
@Table(name="announcement")
public interface AnnouncementRepository  extends CrudRepository<Announcement, Integer> {
}
