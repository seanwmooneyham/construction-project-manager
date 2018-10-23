import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Announcement} from "../../../announcement/announcement";

@Injectable({
    providedIn: 'root'
})

export class AnnouncementsService {

    public API = '/api';
    public ANNOUNCEMENT_API = this.API + '/announcements';
    public announcement_splash;

    constructor(private http: HttpClient) { }

    getAllAnnouncements(): Observable<any> {
        return this.http.get(this.ANNOUNCEMENT_API + '/list')
    }

    addAnnouncement(announcement: Announcement) {
        let result: Observable<Object>;
        result = this.http.post(this.ANNOUNCEMENT_API + '/list', announcement);
        return result;
    }

    deleteAnnouncement(announcement: Announcement) {
        return this.http.delete(this.ANNOUNCEMENT_API + /edit/ + announcement.announcement_id)
    }

    getAnnouncementSplash(): Observable<any> {
        this.announcement_splash = this.http.get(this.ANNOUNCEMENT_API + '/alert');
        return this.announcement_splash;
    }

    changeAnnouncementSplash(announcement: Announcement) {
        let result: Observable<Object>;
        result = this.http.put(this.ANNOUNCEMENT_API  + '/alert/change', announcement);
        return result;
    }
}
