import { Component } from '@angular/core';
import { MiracleListProxy } from '../Services/MiracleListProxy';
import { Category, Task, SubTask, Importance, LoginInfo } from '../Services/MiracleListProxy';

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
  constructor(private miracleListProxy: MiracleListProxy) {
    // vorübergehende Anmeldelösung nur für Teil 1 und 2
    var li = new LoginInfo();
    li.clientID = "Ihre erhaltene ClientID";
    li.username = "Ihr E-Mail-Adresse";
    li.password = "beliebiges Kennwort";

    this.miracleListProxy.login(li).subscribe(x=> {
      if (x == null) {
        console.log("login NICHT ERFOLGREICH",x);
        alert("Anmeldefehler!");
      }
      else {
        this.token = x.token;
        this.showCategorySet();
    }
    }, err => { 
    console.log("SERVER FEHLER!", err); alert("SERVER FEHLER!");  } );
  }

  showCategorySet() {
    console.log('CategorySet LADEN...');
  }
}
