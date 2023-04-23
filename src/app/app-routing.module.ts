import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ChoisirAnimalComponent } from './choisir-animal/choisir-animal.component';
import { HomeComponent } from './home/home.component';
import { AjoutAnimalComponent } from './ajout-animal/ajout-animal.component';
import { ContentSectionComponent } from './home/content-section/content-section.component';
import { ConsulterPubsComponent } from './home/content-section/consulter-pubs/consulter-pubs.component';
import { ConsulterDetailsPubComponent } from './home/content-section/consulter-details-pub/consulter-details-pub.component';
import { ConsulterFavorisComponent } from './home/content-section/consulter-favoris/consulter-favoris.component';
import { AjouterPubComponent } from './home/content-section/ajouter-pub/ajouter-pub.component';

const routes: Routes = [

  {path:'', redirectTo:'/authentification' , pathMatch:'full'},

  {path:'authentification', component:AuthentificationComponent},

  {path:'inscription', component:InscriptionComponent},

  {path:'choisir-animal', component:ChoisirAnimalComponent},
  
  {path:'ajout-animal', component:AjoutAnimalComponent},

  {path:'home', component:HomeComponent , children : [

      {path:'', redirectTo: 'content-section' , pathMatch: 'full' },  

      {path:'content-section', component:ContentSectionComponent , children : [

        {path:'', redirectTo: 'consulter-pubs' , pathMatch: 'full' },  
    
        {path:'consulter-pubs', component:ConsulterPubsComponent},
  
        {path:'consulter-details-pub', component:ConsulterDetailsPubComponent},

        {path:'consulter-favoris', component:ConsulterFavorisComponent},

        {path:'ajouter-pub', component:AjouterPubComponent}
    
    ]}  
  ]}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
