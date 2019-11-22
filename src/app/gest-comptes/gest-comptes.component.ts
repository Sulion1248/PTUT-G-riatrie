import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-gest-comptes',
  templateUrl: './gest-comptes.component.html',
  styleUrls: ['./gest-comptes.component.css']
})
export class GestComptesComponent implements OnInit {


  constructor(private location: Location) { }

  return(){
    this.location.back();
  }

  ngOnInit() {
  }

  delete_user(){

  }

  edit_user(){
    
  }



}
