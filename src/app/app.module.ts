import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SinglebookPageModule } from './singlebook/singlebook.module';
import { SinglebookPage } from './singlebook/singlebook.page';
import { AddbookPage } from './addbook/addbook.page';
import { AddbookPageModule } from './addbook/addbook.module';
import { SignupPage } from './signup/signup.page';
import { LoginPage } from './login/login.page';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { DBDataPage } from './dbdata/dbdata.page';
import { ToastrService, Toast } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SinglebookPageModule,
    SinglebookPage,
    AddbookPageModule,
AddbookPage,
LoginPage,
SignupPage,
HttpClientModule,
DBDataPage,Toast

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
