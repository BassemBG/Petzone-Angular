import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataAnimalService } from '../services/data-animal.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-choisir-animal',
  templateUrl: './choisir-animal.component.html',
  styleUrls: ['./choisir-animal.component.css']
})
export class ChoisirAnimalComponent implements OnInit{

  animals : any;
  gerer = false;

  

  constructor( private dataAnimal: DataAnimalService, private dataUser: AuthService , private router: Router){}

  ngOnInit(): void{

    this.dataAnimal.getAllUserAnimals( this.dataUser.getDataFromToken()._id )
      .subscribe(
        res=>{
          console.log(res);

          this.animals = res;
        },

        err=>{
          console.log(err);
          
        }
      )
  }

  sendAnimalInfo(animal: any){
    this.dataAnimal.setAnimalSession(animal);
    this.router.navigate(['/home']);

  }

  sendAnimalSexe(sexe: any){
    this.dataAnimal.setNewAnimalSexe(sexe);
    this.router.navigate(['/ajout-animal']);

  }

  supprimerAnimal(id: any){

    Swal.fire({
      title: 'êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arriére!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer'
    }).then((result) => {
      if (result.isConfirmed) {

        this.dataAnimal.delete(id)
          .subscribe(
            res=>{
              console.log(res);
              this.ngOnInit();

              Swal.fire(
                'Supprimé!',
                'Votre animal a été supprimé.',
                'success'
              )
            },
        
            err=>{
              console.log(err);
              
            }
          )
        
      }
    })
    
  }

}
