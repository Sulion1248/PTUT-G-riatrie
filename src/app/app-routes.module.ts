import { GuardGuard } from './guard.guard';
import { PatientComponent } from './patient/patient.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificationComponent } from './identification/identification.component';
import { ServiceComponent } from './service/service.component';
import { ErreurComponent } from './erreur/erreur.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'service', canActivate : [GuardGuard], component: ServiceComponent },
  { path: 'patient/:id', canActivate : [GuardGuard], component: PatientComponent },
  { path: 'identification',  component: IdentificationComponent },
  { path: '',   redirectTo: '/identification', pathMatch: 'full' },
  { path: '**', component: ErreurComponent }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
