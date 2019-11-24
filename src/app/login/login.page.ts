import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email:string;
password:string;
  constructor( public apiservice:ApiServiceService) { }

  ngOnInit() {
  }
  
  login(){
   
    email:this.email;
    password:this.password;
   
  this.apiservice.loggin(this.email,this.password);
  }

}
