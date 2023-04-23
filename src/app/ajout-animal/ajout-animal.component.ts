import { Component, OnInit } from '@angular/core';
import { DataAnimalService } from '../services/data-animal.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajout-animal',
  templateUrl: './ajout-animal.component.html',
  styleUrls: ['./ajout-animal.component.css']
})
export class AjoutAnimalComponent implements OnInit {

  sexeAnimal : any;
  loggedInUserId : any;
  
  animal = {
    name: '',
    owner: '',
    image: '',
    age: '',
    type: '',
    race: '',
    vaccine: '',
}

  image: any;

  selectImage( e: any ){
    this.image = e.target.files[0];
  }


  constructor( private dataAnimal: DataAnimalService, private dataUser : AuthService , private router: Router ) { }

  ngOnInit() : void {
    this.sexeAnimal = this.dataAnimal.getNewAnimalSexe();
    console.log(this.sexeAnimal);
    this.loggedInUserId = this.dataUser.getDataFromToken()._id;  
    console.log(this.loggedInUserId);
    
  }

  
  
  addAnimalProfile(){
    console.log(this.animal.vaccine);
    

    let fd = new FormData();
    fd.append( 'name' , this.animal.name );
    fd.append( 'owner' , this.loggedInUserId );
    fd.append( 'age' , this.animal.age );
    fd.append( 'type' , this.animal.type );
    fd.append( 'race' , this.animal.race );
    fd.append( 'vaccine' , this.animal.vaccine );
    fd.append( 'image' , this.image );
    fd.append( 'sexe' , this.sexeAnimal );

    console.log(fd);
    
    this.dataAnimal.create( fd )
      .subscribe(
        res=>{
          console.log(res);

          Swal.fire({
            icon: 'success',
            title: 'Crée!',
            text: 'Votre nouveau animal a été crée avec succés!',
          })

          this.router.navigate(['/choisir-animal']);

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

  goBack(){
    this.router.navigate(['/choisir-animal']);

  }

}



