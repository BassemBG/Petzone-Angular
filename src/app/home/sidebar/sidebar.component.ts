import { Component, OnInit } from '@angular/core';
import { DataAnimalService } from 'src/app/services/data-animal.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  loggedInAnimal : any;
  constructor(private dataAnimal : DataAnimalService){}

  sexeCondition = this.dataAnimal.getColorCondition();
  
  ngOnInit(){
    this.loggedInAnimal = this.dataAnimal.getAnimalSession();
  }
}
