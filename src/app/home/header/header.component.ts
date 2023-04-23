import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private auth: AuthService ){}

  dataUser: any;

  ngOnInit():void {
    this.dataUser = this.auth.getDataFromToken();
    console.log(this.dataUser);
    
  }

  logOut(){
    this.auth.logOut();
  }

}
