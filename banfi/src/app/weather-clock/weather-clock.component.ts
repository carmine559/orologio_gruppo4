import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface WeatherData {
  weather: { description: string }[];
  main: { temp: number };
  dt: number;
  coord: { lat: number, lon: number };
}

@Component({
  selector: 'app-weather-clock',
  templateUrl: './weather-clock.component.html',
  styleUrls: ['./weather-clock.component.css'],
})
export class WeatherClockComponent {
  city: string = '';
  weather: string = '';
  temperature: number | undefined;
  time: string = '';

  constructor(private http: HttpClient) {}

  getWeatherAndTime() {
    this.http
      .get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=579cdc54afefad54ef0619585e547eb7&units=metric`)
      .subscribe(
        (response) => {
          this.weather = response.weather[0].description;
          this.temperature = response.main.temp;
          const timestamp = response.dt * 1000;
          this.getCurrentTime(response.coord.lat, response.coord.lon).subscribe(
            (time: any) => {
              this.time = time;
            },
            (error) => {
              console.error('Error fetching time data:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching weather data:', error);
        }
      );
  }

  getCurrentTime(lat: number, lon: number) {
    return this.http.get<any>(`http://api.timezonedb.com/v2.1/get-time-zone?key=B4JQUTS5OZY3&format=json&by=position&lat=${lat}&lng=${lon}`)
      .pipe(
        map((response: any) => response.formatted)
      );
  }
}
