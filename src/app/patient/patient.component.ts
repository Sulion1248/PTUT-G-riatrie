import { Requete } from './../requete/requete';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  loading: boolean;
  videancien: boolean;
  videactif: boolean;
  liste: unknown;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reqsql: Requete,
    private location: Location) { }

  ngOnInit() {
      // tslint:disable-next-line: no-string-literal
      const IPP = (this.route.snapshot['_routerState'].url.split('/')[2]);
      this.loading = true;
      this.reqsql.getSejours(IPP).then(
        (rep) => {
          this.loading = false;
          if (rep === 'vide') {
            this.videancien = true;
            this.videactif = true;
        } else {
          this.liste = rep;
          if (rep[0] === []) {
            this.videancien = true;
          }
          if (rep[1] === []) {
            this.videactif = true;
          }
        }
    });  }

    return(){
      this.location.back();
    }

}
