import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://127.0.0.1:3000/user/';

  constructor(private http: HttpClient, private router: Router) {  }

  login(user: any){
    return this.http.post(this.url + 'authentification' , user)
  }

  register(user: any){
    return this.http.post(this.url + 'inscription' , user)
  }

  getDataFromToken(){
    let token = localStorage.getItem('token');

    if(token){
      let data = JSON.parse( window.atob( token.split('.')[1]) );

      return data;
    }
  }

  

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/authentification']);
  }

}
