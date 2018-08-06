import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})

export class ValueComponent implements OnInit {
 values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.getValues();
  }

  getValues() {
      this.http.get('http://localhost:5000/api/values').subscribe(Response => {
          this.values = Response; // Response wird in values gepeichert
      }, error => {console.log(error);
    });
      // Die Methode gibt einen "Observalbe" zurück, was vereinfacht ein Datenstream vom Server ist
      // @return - an Observable of the body as an Object

      // Subscribe hat 3 optionale Parameter:
      // 1. Welche Methode soll bei Erhalt der Daten ausgeführt werden (Callback)
      // 2. Was soll bei einem Error passieren
      // 3. Was passiert nach Abschluss der Datenübertragung : complete
  }

}
