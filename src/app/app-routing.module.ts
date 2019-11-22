import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestComptesComponent } from './gest-comptes/gest-comptes.component';
import { AdminComponent } from './admin/admin.component';
import { GestLogsComponent } from './gest-logs/gest-logs.component';
import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';


const routes: Routes = [
  {path:"",redirectTo:"/admin", pathMatch:"full"},
  {path:"admin",component:AdminComponent},
  {path:"gest-comptes",component:GestComptesComponent},
  {path:"gest-logs",component:GestLogsComponent},
  {path:"ajouter-user",component:AjouterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
