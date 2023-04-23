import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataAnimalService } from 'src/app/services/data-animal.service';
import { DataPubsService } from 'src/app/services/data-pubs.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-consulter-favoris',
  templateUrl: './consulter-favoris.component.html',
  styleUrls: ['./consulter-favoris.component.css']
})
export class ConsulterFavorisComponent {

  loggedInAnimal: any;
  pubsFavorisAll: any;
  pubs: any;
  noPubs: any;

  detailsPub: any;

constructor(private dataAnimal : DataAnimalService, private dataPub : DataPubsService, private router: Router){

}

sexeCondition = this.dataAnimal.getColorCondition();


ngOnInit(){
  this.loggedInAnimal = this.dataAnimal.getAnimalSession();
  
  this.getFavoris();
  
  

}

getFavoris(){
  this.dataPub.getAllFavoris()
  .subscribe(
    res=>{
      console.log("pub All Favoris: ", res);
      this.pubsFavorisAll = res;
      
      //filter favoris
      this.pubs = this.pubsFavorisAll.filter((pub: any) => (pub.animal.owner._id == this.loggedInAnimal.owner._id && pub.animal.sexe == this.loggedInAnimal.sexe))
      console.log(this.pubs);
      
      if(this.pubs.length == 0 ){
        this.noPubs = true;
      }
      
    },
    err=>{
      console.log(err);
      
    })
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


supprimerFavoris(id: any){

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

      this.dataPub.deleteFavoris(id)
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
