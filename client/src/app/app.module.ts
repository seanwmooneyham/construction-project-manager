import * as $ from 'jquery';
import {Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ToolListComponent} from './tools/tool-list/tool-list.component';
import {ToolEditComponent} from './tools/tool-edit/tool-edit.component';
import {MaterialListComponent} from './material/material-list/material-list.component';
import {MaterialEditComponent} from './material/material-edit/material-edit.component';
import {StateService, UIRouterModule} from '@uirouter/angular'
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {
    HTTP_INTERCEPTORS,
    HttpClientModule, HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest, HttpResponse
} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmComponent} from './common/modal/confirm/confirm.component';
import { FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { AnnouncementListComponent } from './announcement/announcement-list.component';
import { AnnouncementAlertComponent } from './announcement/announcement-alert/announcement-alert.component';
import { LoginComponent } from './login/login.component';
import {AppService} from "./common/services/app/app.service";
import {httpInterceptorProviders} from "./common/http-interceptors";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs/index";



const toolState = {name: 'tool', url: 'tools', component: ToolListComponent};
const materialState = {name: 'material', url: 'material', component: MaterialListComponent};
const homeComponent = {name: 'home', url: '', component: HomeComponent};
const loginComponent = {name: 'login', url: 'login', component: LoginComponent};
const announcementsComponent = {name: 'announcements', url: 'announcements', component: AnnouncementListComponent};

const appRoutes = [announcementsComponent, toolState, materialState, homeComponent, loginComponent];
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
        AnnouncementListComponent,
        AnnouncementAlertComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        UIRouterModule.forRoot({states: appRoutes, useHash: true})
    ],
    providers: [AppService, httpInterceptorProviders],
    entryComponents: modalComponents,
    bootstrap: [AppComponent]
})

export class AppModule {
}

platformBrowserDynamic.apply(AppModule);
