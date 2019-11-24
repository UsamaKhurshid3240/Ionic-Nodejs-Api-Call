import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-dbdata',
  templateUrl: './dbdata.page.html',
  styleUrls: ['./dbdata.page.scss'],
})
export class DBDataPage implements OnInit {

  
  constructor(public apiService:ApiServiceService) {}
  loading=false;
  
  quotes=[];
ngOnInit(){
  this.get();
}

  get(){
    this.loading = true;
    
  
    console.log('get');
    this.apiService.dbdata() .subscribe(
      data => {
        this.loading = false;
        this.quotes = data;
        
        console.log('data', this.quotes);
      },
      error => {
        this.loading = false;

        console.log('error', error);
      }
    );
   
  
  }

}
