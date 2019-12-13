import { Requete } from './requete/requete';
import { PatientComponent } from './patient/patient.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IdentificationComponent } from './identification/identification.component';
import { ServiceComponent } from './service/service.component';
import { ErreurComponent } from './erreur/erreur.component';
import { AppRoutesModule } from './app-routes.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { GestComptesComponent } from './gest-comptes/gest-comptes.component';
import { GestLogsComponent } from './gest-logs/gest-logs.component';
import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';
import { GrillesComponent } from './grilles/grilles.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GestComptesComponent,
    GestLogsComponent,
    AjouterUserComponent,
    ErreurComponent,
    ServiceComponent,
    IdentificationComponent,    
    PatientComponent,
    AdminComponent,
    GrillesComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    FormsModule
  ],
  providers: [Requete],
  bootstrap: [AppComponent]
})
export class AppModule { }

