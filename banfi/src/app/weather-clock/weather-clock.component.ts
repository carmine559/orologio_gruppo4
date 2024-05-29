import { Component } from '@angular/core';
import axios from 'axios';
import moment from 'moment';

@Component({
  selector: 'app-weather-clock',
  templateUrl: './weather-clock.component.html',
  styleUrls: ['./weather-clock.component.css'],
})
export class WeatherClockComponent {
  city: string = ''; // Città inserita dall'utente
  weather: string = ''; // Variabile per memorizzare le informazioni meteo
  temperature: number | undefined; // Variabile per memorizzare la temperatura in gradi Celsius
  time: string = ''; // Variabile per memorizzare l'ora

  constructor() {}

  getWeatherAndTime() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=579cdc54afefad54ef0619585e547eb7&units=metric`
      )
      .then((response) => {
        this.weather = response.data.weather[0].description;
        this.temperature = response.data.main.temp;
        this.time = moment().format('MMMM Do YYYY, h:mm:ss a');
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }
}
