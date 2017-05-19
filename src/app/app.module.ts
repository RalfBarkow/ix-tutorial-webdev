import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Proxy
import { MiracleListProxy } from './Services/MiracleListProxy';
// MomentJS
import * as moment from 'moment';
import 'moment/locale/de';

import {MomentModule} from 'angular2-moment/moment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule
  ],
  providers: [MiracleListProxy],
  bootstrap: [AppComponent]
})
export class AppModule {

/**
 *
 */
constructor() {

 // Sprache für momentJS auf aktuelle Browsersprache setzen
 // moment.locale(window.navigator.language);
 // oder feste Sprache:
 moment.locale("de-de");

}

}
