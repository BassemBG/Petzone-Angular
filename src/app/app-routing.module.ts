import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ChoisirAnimalComponent } from './choisir-animal/choisir-animal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'', redirectTo:'/authentification' , pathMatch:'full'},

  {path:'authentification', component:AuthentificationComponent},

  {path:'inscription', component:InscriptionComponent},

  {path:'choisir-animal', component:ChoisirAnimalComponent},
  
  {path:'home', component:HomeComponent},
  
  {path:'choisir-animal', component:ChoisirAnimalComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
