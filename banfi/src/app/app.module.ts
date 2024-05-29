import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Aggiunto FormsModule
import { AppComponent } from './app.component';
import { WeatherClockComponent } from './weather-clock/weather-clock.component';

@NgModule({
  declarations: [AppComponent, WeatherClockComponent],
  imports: [
    BrowserModule,
    FormsModule, // Aggiunto FormsModule qui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
