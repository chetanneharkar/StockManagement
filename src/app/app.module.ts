import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GSTTaxationComponent } from './gst-taxation/gst-taxation.component';

@NgModule({
  declarations: [
    AppComponent,
    GSTTaxationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
