import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPubsService {


  url_post = 'http://127.0.0.1:3000/post/';
  url_favoris = 'http://127.0.0.1:3000/favoris/';

  animal : any;
  detailsPub : any;
    
  constructor( private http: HttpClient ) { }

  create( pub: any ){
    return this.http.post( this.url_post + 'ajout', pub );

  }

  getAll(){
    return this.http.get( this.url_post + 'getall');
  }

  getById(id : any){
    return this.http.get( this.url_post + 'getbyid/'+ id);
  }

  getDetailsPub(){
    return this.detailsPub;
  }

  setDetailsPub(detailsPub : any){
    this.detailsPub = detailsPub;
  }

  ajoutPubFavoris( pub_favoris: any ){
    return this.http.post( this.url_favoris + 'ajout', pub_favoris );
  }

  getAllFavoris(){
    return this.http.get( this.url_favoris + 'getall');
  }

  deleteFavoris(id: any){
    return this.http.delete( this.url_favoris + 'delete/' + id );
  }
}
