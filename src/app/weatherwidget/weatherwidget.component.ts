import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherwidget',
  templateUrl: './weatherwidget.component.html',
  styleUrls: ['./weatherwidget.component.css']
})
export class WeatherwidgetComponent implements OnInit {

  WeatherData: any;

  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    this.keepOn();
    console.log(this.WeatherData);
  }

  keepOn() {
    setInterval(() => {
      this.getWeatherData();
    }, 5000)
  }

  latt = 0.00;
  longg = 0.00;

  getWeatherData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.latt = latitude;
        this.longg = longitude;

        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.latt + '&lon=' + this.longg + '&appid=3b39c6b6485260f7bb6f56a9c8d7a258')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setWeatherData(data);
        })
      });
    }
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    this.WeatherData.temp = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    const date = new Date().toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})
    this.WeatherData.date = date;
    this.WeatherData.condit = this.WeatherData.weather[0].main;
  }

}
