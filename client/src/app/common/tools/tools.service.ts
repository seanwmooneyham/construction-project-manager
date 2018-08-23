import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})
export class ToolsService {

    public API = '//localhost:8080';
    public TOOL_API = this.API + '/tools';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.TOOL_API + '/list');
    }

    deleteTool(toolId) {
        return this.http.delete(this.TOOL_API + '/edit/' + toolId);
    }
}


