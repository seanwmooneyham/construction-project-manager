import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolListComponent } from './tools/tool-list/tool-list.component';
import { ToolEditComponent } from './tools/tool-edit/tool-edit.component';
import { MaterialListComponent } from './material/material-list/material-list.component';
import { MaterialEditComponent } from './material/material-edit/material-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    ToolEditComponent,
    MaterialListComponent,
    MaterialEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
