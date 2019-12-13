import { Requete } from './../requete/requete';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  liste ;
  loading: boolean;
  vide = false;
  constructor( private reqsql: Requete ) {
  }

  ngOnInit() {
    this.loading = true;
    this.reqsql.getPatients().then(
      (rep) => {
        this.loading = false;
        if (rep === 'vide') {
          this.vide = true;
      } else {
        this.liste = rep;
      }
  });
  }

}
