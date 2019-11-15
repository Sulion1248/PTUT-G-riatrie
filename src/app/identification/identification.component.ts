import { MDP } from './../MDP';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  constructor() { }
  user: '';
  password: '';
  login() {
    console.log(this.user + ' ' + this.password);
    let key = false;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < MDP.length; i++) {
      console.log(i);
      if  (MDP[i].utilisateur === this.user) {
        if (MDP[i].mdp === this.password) {
          key = true;
          console.log( 'validé' );
        }
      }
    }
    AppComponent.log = key;
  }

  logout() {
    AppComponent.log = false;
  }

  ngOnInit() {
    this.logout();
      }

}
