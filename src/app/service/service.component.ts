import { Requete } from './../requete/requete';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  liste=([["IPP", "Nom", "Prenom", "Nom de jeune fille", "age", "date entre", "secteur2", "#318ce7"], ["IPP", "Nom", "Prenom", "Nom de jeune fille", "age", "date entre", "secteur1", "#f00000"]]) ;
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
        //this.liste = rep;
      }
  });
  }

}
