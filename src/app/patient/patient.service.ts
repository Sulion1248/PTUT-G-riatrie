import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from './patient';
import { PATIENTtest } from '../PATIENTtest';


@Injectable({
    providedIn: 'root',
  })
  export class PatientService {
    constructor() { }

    getPatients(): Observable<Patient[]> {
      return of(PATIENTtest);
    }
    getHero(id: number | string) {
      return this.getPatients().pipe(
        map((patients: Patient[]) => patients.find(patient => patient.id === +id))
      );
    }
  }
