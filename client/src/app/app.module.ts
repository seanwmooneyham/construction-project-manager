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
import { HomeComponent } from './home/home.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementAlertComponent } from './announcement/announcement-alert/announcement-alert.component';



const toolState = {name: 'tool', url: 'tool/tool-list', component: ToolListComponent};
const materialState = {name: 'material', url: 'material/material-list', component: MaterialListComponent};
const homeComponent = {name: 'home', url: '', component: HomeComponent};

const appRoutes = [toolState, materialState, homeComponent];
const modalComponents = [ConfirmComponent, AnnouncementAlertComponent, ToolEditComponent, MaterialEditComponent];



@NgModule({
    declarations: [
        AppComponent,
        ToolListComponent,
        ToolEditComponent,
        MaterialListComponent,
        MaterialEditComponent,
        ConfirmComponent,
        HomeComponent,
        AnnouncementComponent,
        AnnouncementAlertComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        UIRouterModule.forRoot({states: appRoutes, useHash: true})
    ],
    providers: [],
    entryComponents: modalComponents,
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic.apply(AppModule);
