import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {Material} from "../../../material/material";


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

    public API = '/api';
    public MATERIAL_API = this.API + '/material';

    constructor(private http: HttpClient) {
    }

    getAllMaterial(): Observable<any> {
        return this.http.get(this.MATERIAL_API + '/list');
    }

    addMaterial(material: Material) {
        let result: Observable<Object>;
        result = this.http.post(this.MATERIAL_API  + '/list', material);
        return result;
    }

    deleteMaterial(material: Material) {
        return this.http.delete(this.MATERIAL_API + '/edit/' + material.id);
    }

    editMaterial(material: Material) {
        let result: Observable<Object>;
        result = this.http.put(this.MATERIAL_API + '/edit/' + material.id, material);
        return result;
    }
}
