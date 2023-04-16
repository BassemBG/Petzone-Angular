import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ChoisirAnimalComponent } from './choisir-animal/choisir-animal.component';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContentSectionComponent } from './home/content-section/content-section.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    InscriptionComponent,
    ChoisirAnimalComponent,
    HeaderComponent,
    SidebarComponent,
    ContentSectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
