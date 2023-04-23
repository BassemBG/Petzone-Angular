import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataAnimalService } from 'src/app/services/data-animal.service';
import { DataPubsService } from 'src/app/services/data-pubs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulter-pubs',
  templateUrl: './consulter-pubs.component.html',
  styleUrls: ['./consulter-pubs.component.css']
})
export class ConsulterPubsComponent implements OnInit{

  pubsAll : any;
  pubs: any;
  noPubs: any;
  loggedInAnimal : any;
  detailsPub : any;

  pub_favoris = {
    animal: "",
    pub_favoris: ""
  };

  constructor(private dataAnimal : DataAnimalService, private dataPub : DataPubsService, private router: Router){}

  sexeCondition = this.dataAnimal.getColorCondition();

  
  ngOnInit(){
    this.loggedInAnimal = this.dataAnimal.getAnimalSession();
    console.log(this.loggedInAnimal);
    
    this.dataPub.getAll()
    .subscribe(
      res=>{
        console.log("pub All: ", res);
        this.pubsAll = res;
        
        //filter posts
        this.pubs = this.pubsAll.filter((pub: any) => (pub.animal.sexe != this.loggedInAnimal.sexe && pub.owner._id != this.loggedInAnimal.owner._id && pub.animal.type == this.loggedInAnimal.type))
        console.log(this.pubs);
        
        if(this.pubs.length == 0 ){
          this.noPubs = true;
        }
      },
      err=>{
        console.log(err);
        
      }
    )
    

  }

  

  consulterDetails(id: any){
    console.log(id);
    
    this.dataPub.getById(id)
    .subscribe(
      res=>{
        console.log(res);
        this.detailsPub = res;
        this.dataPub.setDetailsPub(this.detailsPub);

        this.router.navigate(['/home/content-section/consulter-details-pub']);
      },
      err=>{
        console.log(err);
        
      }
    )
    
  }

  ajouterFavoris(id_pub: any){
    this.pub_favoris.animal = this.loggedInAnimal._id;
    this.pub_favoris.pub_favoris = id_pub;

    this.dataPub.ajoutPubFavoris(this.pub_favoris)
      .subscribe(
        res=>{
          console.log(res);
      
          Swal.fire({
            icon: 'success',
            title: 'Ajouté !',
            text: 'Cette publication a été ajoutée aux favoris avec succés!',
          })

        },

        err=>{
          Swal.fire({
            icon: 'error',
            title: 'Ooops..',
            text: 'Une erreur est survenue ou cette publication est déjà favorie !',
          })
          console.log(err);
          
        }
      )
  }

}
