import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ToolListComponent} from './tools/tool-list/tool-list.component';
import {ToolEditComponent} from './tools/tool-edit/tool-edit.component';
import {MaterialListComponent} from './material/material-list/material-list.component';
import {MaterialEditComponent} from './material/material-edit/material-edit.component';
import {UIRouterModule} from '@uirouter/angular'
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmComponent} from './common/modal/confirm/confirm.component';
import { FormsModule} from "@angular/forms";

import * as $ from 'jquery';
import {Material} from "./material/material";



let toolState = {name: 'tool', url: 'tool/tool-list', component: ToolListComponent};
let materialState = {name: 'material', url: 'material/material-list', component: MaterialListComponent};



@NgModule({
    declarations: [
        AppComponent,
        ToolListComponent,
        ToolEditComponent,
        MaterialListComponent,
        MaterialEditComponent,
        ConfirmComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        UIRouterModule.forRoot({states: [toolState, materialState], useHash: true})
    ],
    providers: [],
    entryComponents: [ConfirmComponent, ToolEditComponent, MaterialEditComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic.apply(AppModule);
