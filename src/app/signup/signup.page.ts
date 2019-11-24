import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
name:string;
email:string;
student_id:Number;
password:string;
  constructor(public apiservice:ApiServiceService) { }

  ngOnInit() {
  }
register(){
  name:this.name;
  email:this.email;
  password:this.password;
  student_id:this.student_id;
this.apiservice.postAPIData(this.name,this.student_id,this.email,this.password);
}


}
