import { MDP } from './../MDP';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  constructor(private router: Router ) { }
  user: '';
  password: '';
  login() {
    console.log(this.user + ' ' + this.password);
    let keyad = false;
    let key = false;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < MDP.length; i++) {
      console.log(i);
      if  (MDP[i].utilisateur === this.user) {
        if (MDP[i].mdp === this.password) {
          if (MDP[i].autho) {
            keyad = true;
           } else {
              key = true;
          }
        }
      }
    }
    AppComponent.logad = keyad;
    AppComponent.log = key;
  }

  logout() {
    AppComponent.log = false;
    AppComponent.logad = false;
  }

  ngOnInit() {
    this.logout();
      }

  onKey(event: any) { // without type info
        this.login();
        if (event.keyCode === 13) {
          this.router.navigate(['/service']);
        }
      }

}
