import { Requete } from './../requete/requete';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  loading: boolean;
  vide = false;
  liste: unknown;
  constructor(  private reqsql: Requete,
                private location: Location ) {
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

  return() {
    this.location.back();
  }

}
