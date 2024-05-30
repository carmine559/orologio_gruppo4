import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Aggiunto FormsModule
import { AppComponent } from './app.component';
import { WeatherClockComponent } from './weather-clock/weather-clock.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, WeatherClockComponent, AnalogClockComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
