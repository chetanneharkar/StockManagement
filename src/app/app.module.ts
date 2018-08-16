import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { GSTTaxationComponent } from './gst-taxation/gst-taxation.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GstTaxationServiceService } from './gst-taxation/gst-taxation-service.service';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { SettingComponent } from './setting/setting.component';


import { ProductClassificationComponent } from './product-classification/product-classification.component';

// const appRoutes: Routes = [
//   // { path:'home', component: HomeComponent}
// ];
@NgModule({
  declarations: [
    AppComponent,
    ProductClassificationComponent,
    GSTTaxationComponent,
    LoginComponent,
    HomeComponent,
    StockComponent,
    SettingComponent,
    ProductClassificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    RouterModule.forRoot([
      {
         path: '',
         component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'stock',
        component: StockComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      }
   ])
  ],
  bootstrap: [GSTTaxationComponent]
})
export class AppModule { }
