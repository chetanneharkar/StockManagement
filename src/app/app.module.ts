import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductClassificationComponent } from './product-classification/product-classification.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductClassificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductClassificationComponent]
})
export class AppModule { }
