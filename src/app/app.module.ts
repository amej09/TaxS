import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedevableCreateComponent } from './redevables/redevable-create/redevable-create.component';
import { RedevablesComponent } from './redevables/redevables.component';
import { RedevableListComponent } from './redevables/redevable-list/redevable-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RedevableCreateComponent,
    RedevablesComponent,
    RedevableListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
