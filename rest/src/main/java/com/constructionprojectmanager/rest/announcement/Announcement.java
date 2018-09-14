package com.constructionprojectmanager.rest.announcement;

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
    private Long id;
    private @NonNull
    String text;
    private @NonNull
    Date created_date;
    private Date expiration_date;

    public Announcement(String text, Date expiration_date) {

        this.text = text;
        this.created_date = new Date();
        this.expiration_date = expiration_date;
    }

    public Date getCreated_date() {
        return created_date;
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

    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public String getText() {

        return text;
    }

    public void setText(String name) {

        this.text = name;
    }
}
