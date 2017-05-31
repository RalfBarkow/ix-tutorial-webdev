import { Component } from '@angular/core';
import { MiracleListProxy } from '../Services/MiracleListProxy';
import { Category, Task, SubTask, Importance, LoginInfo } from '../Services/MiracleListProxy';

// Routing
import { Router } from '@angular/router';
import { RoutingModule } from '../Util/RoutingModule';

// Kommunikation
import { CommunicationService } from "../Services/CommunicationService"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Attribute mit in HTML darzustellenden Daten
  private categorySet: Array<Category>;
  private category: Category; // Aktuelle Kategorie
  private taskSet: Array<Task>;
  private task: Task; // Aktuelle Aufgabe
 // weitere Attribute
  private token: string;  // vorübergehende Anmeldelösung nur für Teil 1 und 2
  private today: Date = new Date();


  // ================ Konstruktor
  constructor(private miracleListProxy: MiracleListProxy, 
    private communicationService: CommunicationService
  ) {
    console.log("======= AppComponent:Constructor");
    // vorübergehende Anmeldelösung nur für Teil 1 und 2 des iX-Tutorials
    var li = new LoginInfo();
    li.clientID = "11111111-85f6-4079-ba87-24987637b042";
    li.username = "ralf.barkow@me.com";
    li.password = "M4r3cl2L1st";

    this.miracleListProxy.login(li).subscribe(x=> {
      if (x == null) {
        console.log("login NICHT ERFOLGREICH",x);
        this.communicationService.token = "";
        alert("Anmeldefehler!");
      }
      else {
        this.token = x.token;
        this.showCategorySet();
    }
    }, err => { this.communicationService.token = "";
    console.log("SERVER FEHLER!", err); alert("SERVER FEHLER!");  } );
  }

  async showCategorySet() {
    console.log('CategorySet LADEN...');
    var r = await this.miracleListProxy.categorySet(this.communicationService.token).toPromise();
    this.categorySet = r;
    console.log('CategorySet GELADEN', r);
    this.category = this.categorySet[0];
    this.showTaskSet(this.category); //FIXME: this.category.categoryID – Argument of type 'number' is not assignable to parameter of type 'Category'.
  }

  selectCategory(c: Category) {
    this.task = null;
    this.showTaskSet(c);
  }

  async showTaskSet(c: Category) {
    console.log("TaskSet LADEN...");
    this.category = c;
    let x = await this.miracleListProxy.taskSet(this.communicationService.token, c.categoryID).toPromise();
    this.taskSet = x;
    console.log("TaskSet GELADEN", x)
  }
}
