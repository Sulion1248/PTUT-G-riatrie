import { PATIENTtest } from './../PATIENTtest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  liste = PATIENTtest;
  constructor() { }

  ngOnInit() {
  }

}