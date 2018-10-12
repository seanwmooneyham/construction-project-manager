package com.constructionprojectmanager.rest.announcement;


import com.constructionprojectmanager.rest.tool.Tool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/announcements")
public class AnnouncementController {
    private static final Logger logger = LoggerFactory.getLogger(AnnouncementController.class);

    private static final int ANNOUNCEMENT_SPLASH_RECORD_ID = 1;

    @Autowired
    private AnnouncementRepository announcementRepository;

    @Autowired
    private AnnouncementSplashRepository announcementSplashRepository;


    @GetMapping("/list")
    @CrossOrigin(origins = "http://localhost:4200")
    public Iterable<Announcement> getAllAnnouncements() {
        return announcementRepository.findAll();
    }

    @PostMapping("list")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public ResponseEntity<Announcement> addNewAnnouncement(@RequestBody Announcement announcement) {
        Announcement newAnnouncement = new Announcement(announcement.getText(), announcement.getAnnouncement_level());
        return new ResponseEntity<>(announcementRepository.save(newAnnouncement), HttpStatus.CREATED);

    }

    @DeleteMapping("/edit/{id}")
    @ResponseBody
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Announcement> deleteAnnouncement(@PathVariable("id") int id) {
        Optional<Announcement> dbAnnouncement = announcementRepository.findById(id);
        if(dbAnnouncement.isPresent()) {
            announcementRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/alert")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Announcement> getAlert() {
        Optional<AnnouncementSplash> dbAnnouncementSplash = announcementSplashRepository.findById(ANNOUNCEMENT_SPLASH_RECORD_ID );
        return new ResponseEntity<>(dbAnnouncementSplash.get().getAnnouncement(), HttpStatus.OK);
    }

    @PutMapping("/alert/change")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public ResponseEntity<AnnouncementSplash> changeAlert(@RequestBody Announcement announcement) {
        Optional<AnnouncementSplash> dbAnnouncementSplash = announcementSplashRepository.findById(ANNOUNCEMENT_SPLASH_RECORD_ID);
        dbAnnouncementSplash.get().setFk_announcement_id(announcement.getAnnouncement_id());
        //dbAnnouncementSplash.get().getAnnouncement().setAnnouncement_id(announcement.getAnnouncement_id());
        return new ResponseEntity<>(announcementSplashRepository.save(dbAnnouncementSplash.get()), HttpStatus.OK);
    }
}
