import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataAnimalService } from 'src/app/services/data-animal.service';
import { DataPubsService } from 'src/app/services/data-pubs.service';

@Component({
  selector: 'app-consulter-details-pub',
  templateUrl: './consulter-details-pub.component.html',
  styleUrls: ['./consulter-details-pub.component.css']
})
export class ConsulterDetailsPubComponent {

  loggedInAnimal : any;
  detailsPub : any;

  constructor(private dataAnimal : DataAnimalService, private dataPub : DataPubsService, private router: Router){}

  sexeCondition = this.dataAnimal.getColorCondition();

  
  ngOnInit(){
    this.loggedInAnimal = this.dataAnimal.getAnimalSession();

    this.detailsPub = this.dataPub.getDetailsPub();
    console.log(this.detailsPub);
    
      
    
  }

}
