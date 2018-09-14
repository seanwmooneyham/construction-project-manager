package com.constructionprojectmanager.rest.announcement;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Table(name = "announcement_splash")
public class AnnouncementSplash {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="fk_announcement_id")
    private int fk_announcement_id;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_announcement_id", insertable = false, updatable = false)
    @JsonBackReference
    private Announcement announcement;


    public int getId() {

        return id;
    }

    public void setId(int id) {

        this.id = id;
    }


    public Announcement getAnnouncement() {
        return this.announcement;
    }

    public void setAnnouncement(Announcement announcement) {

        this.announcement = announcement;
    }

    public int getFk_announcement_id() {
        return fk_announcement_id;
    }

    public void setFk_announcement_id(int fk_announcement_id) {
        this.fk_announcement_id = fk_announcement_id;
    }
}
