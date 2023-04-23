import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataAnimalService } from 'src/app/services/data-animal.service';
import { DataPubsService } from 'src/app/services/data-pubs.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajouter-pub',
  templateUrl: './ajouter-pub.component.html',
  styleUrls: ['./ajouter-pub.component.css']
})
export class AjouterPubComponent implements OnInit{
  loggedInAnimal = this.dataAnimal.getAnimalSession();

  pub = {
    animal:this.loggedInAnimal._id,
    owner:this.loggedInAnimal.owner._id,
    descendanceRace:'',
    negociable:'',
    contenue:'',
    typeEchange:'',
  };

  constructor(private dataAnimal : DataAnimalService, private dataPub : DataPubsService, private router: Router){}

  ngOnInit(){
    Swal.fire({
      icon: 'info',
      title: 'Clarification !',
      text: 'Vouz pouvez avoir seuelement une publication par animal. Si vous avez déjà publier une offre. Vous allez l\'écraser en publiant une autre.',
    })
  }

  sexeCondition = this.dataAnimal.getColorCondition();


  ajoutPub(){
    console.log(this.pub);
    
    this.dataPub.create(this.pub)
    .subscribe(
      res=>{
        console.log(res);

        this.router.navigate(['/home/content-section/consulter-pubs']);
      },

      err=>{
        console.log(err);
        
      }
      )
    
  }



}
