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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjoutAnimalComponent } from './ajout-animal/ajout-animal.component';
import { ConsulterDetailsPubComponent } from './home/content-section/consulter-details-pub/consulter-details-pub.component';
import { ConsulterPubsComponent } from './home/content-section/consulter-pubs/consulter-pubs.component';
import { ConsulterFavorisComponent } from './home/content-section/consulter-favoris/consulter-favoris.component';
import { AjouterPubComponent } from './home/content-section/ajouter-pub/ajouter-pub.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    InscriptionComponent,
    ChoisirAnimalComponent,
    HeaderComponent,
    SidebarComponent,
    ContentSectionComponent,
    HomeComponent,
    AjoutAnimalComponent,
    ConsulterDetailsPubComponent,
    ConsulterPubsComponent,
    ConsulterFavorisComponent,
    AjouterPubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
