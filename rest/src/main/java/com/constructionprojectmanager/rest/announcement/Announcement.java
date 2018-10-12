package com.constructionprojectmanager.rest.announcement;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Table(name = "announcement")
public class Announcement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int announcement_id;
    private @NonNull
    String text;
    private @NonNull
    String announcement_level;
    private @NonNull
    Date created_date;
    private Date expiration_date;

    @OneToOne(mappedBy = "announcement")
    @JsonManagedReference
    private AnnouncementSplash announcementSplash;

    public Announcement(String text, String announcement_level) {

        this.text = text;
        this.announcement_level = announcement_level;
        this.created_date = new Date();
        this.expiration_date = this.created_date;
    }

    public Date getCreated_date() {
        return created_date;
    }

    public int getAnnouncement_id() {
        return announcement_id;
    }

    public void setAnnouncement_id(int announcement_id) {
        this.announcement_id = announcement_id;
    }

    public void setCreated_date(Date created_date) {
        this.created_date = created_date;
    }

    public Date getExpiration_date() {
        return expiration_date;
    }

    public void setExpiration_date(Date expiration_date) {
        this.expiration_date = expiration_date;
    }


    public String getText() {

        return text;
    }

    public void setText(String name) {

        this.text = name;
    }
    public String getAnnouncement_level() {
        return announcement_level;
    }

    public void setAnnouncement_level(String level) {
        this.announcement_level = level;
    }

    public AnnouncementSplash getAnnouncementSplash() {
        return announcementSplash;
    }

    public void setAnnouncementSplash(AnnouncementSplash announcementSplash) {
        this.announcementSplash = announcementSplash;
    }
}
