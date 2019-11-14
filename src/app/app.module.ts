import { PatientComponent } from './patient/patient.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IdentificationComponent } from './identification/identification.component';
import { ServiceComponent } from './service/service.component';
import { ErreurComponent } from './erreur/erreur.component';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    ErreurComponent,
    ServiceComponent,
    IdentificationComponent,
    PatientComponent  ],
  imports: [
    BrowserModule,
    AppRoutesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

