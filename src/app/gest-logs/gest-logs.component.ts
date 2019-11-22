import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-gest-logs',
  templateUrl: './gest-logs.component.html',
  styleUrls: ['./gest-logs.component.css']
})
export class GestLogsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  return(){
    this.location.back();
  }

}
