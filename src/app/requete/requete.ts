import { MDP } from './../MDP';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Motdepasse } from '../motdepasse';
import 'rxjs-compat';

@Injectable()
export class Requete {
  constructor(private http: HttpClient) {
   }

   private urlutilisateur = 'http://localhost:8080/utilisateur';
   private urlpatient = 'http://localhost:8080/patients';
   getUtilisateur(user) {
     const promise = new Promise((resolve, reject) => {
      this.http.get(this.urlutilisateur + '/' + user)
      .toPromise()
      .then(
        users => {
          if (users[0] === undefined) {
              resolve(['vide', 'vide', 'vide']);
          } else {
            resolve(
              [JSON.parse(users[0].UtilisateurJSON).user,
              JSON.parse(users[0].UtilisateurJSON).password,
              JSON.parse(users[0].UtilisateurJSON).role]);
          }
          },
        msg => {
          reject(msg);
        }
      );
});
     return promise;
   }
   getPatients() {
    const promise = new Promise((resolve, reject) => {
     this.http.get(this.urlpatient)
     .toPromise()
     .then(
       patients => {
         if (patients[0] === undefined) {
             resolve('vide');
         } else {
           let i = -1;
           const p = [];
           console.log(JSON.parse(patients[0].patientJSON));
           while (patients[i + 1] !== undefined ) {
              i = i + 1;
              p.push([patients[i].idPatient,
              JSON.parse(patients[i].patientJSON).nom,
              JSON.parse(patients[i].patientJSON).prenom,
              JSON.parse(patients[i].patientJSON).nomdejeunefille,
              JSON.parse(patients[i].patientJSON).age,
              (patients[i].datedebut),
              (patients[i].nom),
              (patients[i].couleur)]);
            }

           resolve(p);
         }
         },
       msg => {
         reject(msg);
       }
     );

           });
    return promise;
  }


  }
