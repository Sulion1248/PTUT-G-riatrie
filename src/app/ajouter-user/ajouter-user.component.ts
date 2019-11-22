import { Component, OnInit } from '@angular/core';
import {
  FormGroup, Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        nom: [null, Validators.required],
        prenom: [null, Validators.required],
        identifiant: [null, Validators.required],
        password: [null, Validators.required]
    })
  }



}
