import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolListComponent } from './tools/tool-list/tool-list.component';
import { ToolEditComponent } from './tools/tool-edit/tool-edit.component';
import { MaterialListComponent } from './material/material-list/material-list.component';
import { MaterialEditComponent } from './material/material-edit/material-edit.component';
import { UIRouterModule } from '@uirouter/angular'
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { HttpClientModule} from "@angular/common/http";


let toolState = { name: 'tool', url: 'tool/tool-list', component: ToolListComponent };
let materialState = { name: 'material', url: 'material/material-list', component: MaterialListComponent };

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    ToolEditComponent,
    MaterialListComponent,
    MaterialEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot({ states: [toolState, materialState], useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic.apply(AppModule);
