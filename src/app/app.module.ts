import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Proxy
import { MiracleListProxy } from '../Services/MiracleListProxy';
// MomentJS
import * as moment from 'moment';
import 'moment/locale/de';

import {MomentModule} from 'angular2-moment/moment.module';

// Eigene Pipes
import {LineBreakPipe} from "../Util/LineBreakPipe"
import {ImportancePipe} from "../Util/ImportancePipe"
// Kontextmenü (Angular-Modul)
import { ContextMenuModule } from '../Util/angular2-contextmenu/angular2-contextmenu';
// Datetime-Direktive
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

// eigene Komponenten
import { LoginComponent } from '../Login/Login.Component'
import { SubTaskListComponent } from '../SubTaskList/SubTaskList.Component'
import { TaskEditComponent } from '../TaskEdit/TaskEdit.Component'
import { TaskViewComponent } from '../TaskView/TaskView.Component'

// Routing
import { Router } from '@angular/router'
import { RoutingModule } from '../Util/RoutingModule'

// Kommunikation
import { CommunicationService } from '../Services/CommunicationService'

@NgModule({
  declarations: [ // Komponenten und Pipes
    AppComponent,
    ImportancePipe,
    LineBreakPipe,
    LoginComponent,
    SubTaskListComponent,
    TaskEditComponent, 
    TaskViewComponent
  ],
  imports: [ // Angular-Module
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    NKDatetimeModule,
    RoutingModule
  ],
  providers: [ // Services / Dependency Injection 
    MiracleListProxy, CommunicationService],
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
