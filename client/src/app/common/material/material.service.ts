import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

    public API = '//localhost:8080';
    public MATERIAL_API = this.API + '/material';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.MATERIAL_API + '/list');
    }
}
