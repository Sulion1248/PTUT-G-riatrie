import { Requete } from './../requete/requete';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  liste ;
  loading: boolean;
  vide = false;
  IPP: '';
  constructor( private router: Router , private reqsql: Requete ) {
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

  onKey(event: any) {
    if (event.keyCode === 13) {
      this.navigate()
      ; }
  }

  navigate() {
    this.router.navigate(['/patient/' + this.IPP]);
  }
}
