import { MDP } from './../MDP';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Requete} from './../requete/requete';
@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})

export class IdentificationComponent implements OnInit {
  constructor( private router: Router , private reqsql: Requete ) {
   }
  user: '';
  password: '';
  loading = false;
  falsePassword = false;
  login() {
    this.loading = true;
    this.falsePassword = false;
    this.reqsql.getUtilisateur(this.user).then(
      (rep) => {
        this.loading = false;
        console.log('serveur : ' + rep[0] + ' ' + rep[1] + ' ' + rep[2]);
        this.naviguate(rep);
  }); }

  naviguate(rep) {
    console.log('demande : ' + this.user + ' ' + this.password);
    let keyad = false;
    let key = false;
    console.log(rep[0] === this.user);
    console.log(rep[1] === this.password);
    if  (rep[0] === this.user) {
    if (rep[1] === this.password) {
       if (rep[2] === 'admin') {
         keyad = true;
         this.falsePassword = false;
        } else {
         key = true;

         this.falsePassword = false;
        }
      } else {
        this.falsePassword = true;
      }
    } else {
      this.falsePassword = true;
    }
    AppComponent.logad = keyad;
    AppComponent.log = key;
    this.router.navigate(['/service']);
  }

  logout() {
    AppComponent.log = false;
    AppComponent.logad = false;
  }

  ngOnInit() {
    this.logout();
      }

  onKey(event: any) { // without type info
        if (event.keyCode === 13) {
          this.login()
          ; }
      }
}

