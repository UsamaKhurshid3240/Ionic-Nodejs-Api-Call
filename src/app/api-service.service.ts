import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { nmcall } from 'q';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  
  loading = false;
  quotes = [];
  flag:string;
  toastCtrl: any;
 
 
  
constructor(private httpClient: HttpClient,public router:Router,private _tc: ToastController) {}



postAPIData(nm,stid,em,pass){
let headers=new HttpHeaders();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json');

let body={
  name:nm, 
  student_id : stid,
  email:em,
  password:pass
}



  console.log("POST");
  return this.httpClient.post("http://localhost:3000/signup",body,{headers: headers})
 
  .subscribe(data=>{
    console.log(data);
  });

  

  
}


dbdata(): Observable<any>{
//   this.loading = true;

  
//  return this.httpClient.get("http://localhost:3000/students" + this.quotes).pipe(
           
//         ).subscribe(response => {
//           this.loading = false;
//             console.log('GET Response:', response);
           
//           },
//             error => {
//                   this.loading = false;
            
//                   console.log('error', error);
                
//         });


  const url = "http://localhost:3000/students";

  return this.httpClient.get(url);

 
}

loggin(em,pss){
  
  let headers=new HttpHeaders();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json');

let body={

  email:em,
  password:pss
}


  console.log("LOGIN");
  return this.httpClient.post("http://localhost:3000/login",body,{headers: headers})
  .subscribe(async data=>{

    console.log(JSON.stringify(data));
    this.flag=JSON.stringify(data.tk);
  
    if (this.flag=="1"){
    let options = {
      message: "Login Successfully",
      duration: 3000,
      cssClass: "toast"
     };
    
    (await this._tc.create(options)).present();
    this.router.navigateByUrl('/home');
    }

    else if(this.flag=="2"){
      let options = {
        message: "Password is Incorrect",
        duration: 3000,
        cssClass: "toast1"
       };
      
      (await this._tc.create(options)).present();
    }
    else if(this.flag=="3"){
      let options = {
        message: "Email not Exist",
        duration: 3000,
        cssClass: "toast2"
       };
      
      (await this._tc.create(options)).present();
    }
  });



}
  
 

  
}
