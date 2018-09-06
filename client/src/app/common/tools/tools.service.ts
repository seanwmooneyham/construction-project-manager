import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import { Tool } from "../../tools/tool";


@Injectable({
    providedIn: 'root'
})
export class ToolsService {

    public API = '//localhost:8080';
    public TOOL_API = this.API + '/tools';

    constructor(private http: HttpClient) { }

    addTool(tool: Tool) {
        let result: Observable<Object>;
        result = this.http.post(this.TOOL_API + '/list', tool);
        return result;
    }

    getAllTools(): Observable<any> {
        return this.http.get(this.TOOL_API + '/list');
    }

    deleteTool(tool: Tool) {
        return this.http.delete(this.TOOL_API + '/edit/' + tool.id);
    }

    editTool(tool: Tool) {
      let result: Observable<Object>;
      result = this.http.put(this.TOOL_API + '/edit/' + tool.id, tool);
      return result;
    }
}


