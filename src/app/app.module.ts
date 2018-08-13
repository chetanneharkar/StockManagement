import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductClassificationComponent } from './product-classification/product-classification.component'
import { GSTTaxationComponent } from './gst-taxation/gst-taxation.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GstTaxationServiceService } from './gst-taxation/gst-taxation-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductClassificationComponent,
    GSTTaxationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    GstTaxationServiceService
    
  ],
  bootstrap: [GSTTaxationComponent]
})
export class AppModule { }
