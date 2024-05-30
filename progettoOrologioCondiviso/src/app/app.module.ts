import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrologioComponent } from './orologio/orologio.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    OrologioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
