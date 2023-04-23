import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  constructor( private auth: AuthService, private router: Router){}

  user = {
    firstName : '',
    lastName : '',
    email: '',
    password: '',
    numTel: '',
    address: '',
    dateBirth: ''
  }

  create(){
    console.log(this.user);
    
    this.auth.register(this.user)
      .subscribe(
        res=>{
          Swal.fire({
            icon: 'success',
            title: 'Inscris !',
            text: 'Votre compte a été crée avec succés!',
          })
          this.router.navigate(['/authentification']);
        },

        err=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Veuillez saisir tout les champs !',
          })
          console.log(err);
        }
      )
  }

}
