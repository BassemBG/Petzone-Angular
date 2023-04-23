import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataAnimalService {

  url = 'http://127.0.0.1:3000/animal/';

  animal : any;
  newAnimalSexe : any;
  constructor( private http: HttpClient ) { }

  getAllUserAnimals( owner_id: any ){
    return this.http.get( this.url + 'getAllUserAnimals/'+ owner_id);
  }

  create( animal: any ){
    return this.http.post( this.url + 'ajout', animal );

  }

  delete(id: any){
    return this.http.delete( this.url + 'delete/' + id );

  }

  setAnimalSession( loggedAnimal : any ){
    this.animal = loggedAnimal;
  }

  getAnimalSession(){
    return this.animal;
  }

  getColorCondition(){
    return this.animal.sexe;
  }

  setNewAnimalSexe(sexe : any){
    this.newAnimalSexe = sexe;
  }

  getNewAnimalSexe(){
    return this.newAnimalSexe;
  }
  
}
