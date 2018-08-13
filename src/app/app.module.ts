import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule } from '@angular/forms';

// const appRoutes: Routes = [
//   // { path:'home', component: HomeComponent}
// ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StockComponent,
    SettingComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
