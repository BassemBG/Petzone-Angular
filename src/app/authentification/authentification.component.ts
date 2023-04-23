import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  user = {
    email: '',
    password: ''
  }
  
  constructor( private auth: AuthService, private router: Router ){}

  token: any;

  login(){
    this.auth.login( this.user )    
      .subscribe(
        res=>{
          console.log(res);
          this.token = res;
          localStorage.setItem('token', this.token.myToken);
          
          this.router.navigate(['/choisir-animal']);
          
        },
        err=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Veuillez vérifier votre email ou mot de passe !',
          })
          console.log(err);
          
        }
      )
  }

}
