import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { GestComptesComponent } from './gest-comptes/gest-comptes.component';
import { GestLogsComponent } from './gest-logs/gest-logs.component';
import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GestComptesComponent,
    GestLogsComponent,
    AjouterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
