import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './protection/admin.guard';
import { GuardGuard } from './protection/guard.guard';
import { PatientComponent } from './patient/patient.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificationComponent } from './identification/identification.component';
import { ServiceComponent } from './service/service.component';
import { ErreurComponent } from './erreur/erreur.component';
import { RouterModule, Routes } from '@angular/router';
import { GestComptesComponent } from './gest-comptes/gest-comptes.component';
import { GestLogsComponent } from './gest-logs/gest-logs.component';
import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';

const appRoutes: Routes = [
  { path: 'admin', canActivate : [AdminGuard], component: AdminComponent },
  { path: 'service', canActivate : [GuardGuard], component: ServiceComponent },
  { path: 'patient/:id', canActivate : [GuardGuard], component: PatientComponent },
  { path: 'identification',  component: IdentificationComponent },
  { path: '',   redirectTo: '/identification', pathMatch: 'full' },
  { path:'gest-comptes',component:GestComptesComponent},
  { path:'gest-logs',component:GestLogsComponent},
  { path:'ajouter-user',component:AjouterUserComponent},
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
