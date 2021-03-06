
// Angular Library-Importe
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Eigene Module
import { TaskEditComponent } from "../TaskEdit/TaskEdit.Component"
import { TaskViewComponent } from "../TaskView/TaskView.Component"
import { AppComponent } from "../app/app.component"
// import { PlaygroundComponent } from './../playground/playground.component';
// import { TaskTableComponent } from '../TaskTable/TaskTable.component';

// URLs festlegen
//FIXME router configuration
// https://angular.io/docs/ts/latest/api/router/index/Routes-type-alias.html
const routes: Routes = [
 { path: 'app', component: AppComponent,
  children: [
   { path: 'taskview/:id', component: TaskViewComponent, outlet: "column3" },
   { path: 'taskedit/:id', component: TaskEditComponent, outlet: "column3" }
  ]
 }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class RoutingModule {

}