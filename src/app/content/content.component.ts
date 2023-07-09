import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  // inputValue
  value = '';

  weatherIcons: any = {
    Sunny: 'assets/animation-ready/clear-day.svg',
    'Partly cloudy': 'assets/animation-ready/partly-cloudy-day.svg',
    Overcast: 'assets/animation-ready/overcast.svg',
    Clear: 'assets/animation-ready/clear-day.svg',
    Rainy: 'assets/animation-ready/rain.svg',
    Rain: 'assets/animation-ready/rain.svg',
    Snow: 'assets/animation-ready/snow.svg',
    'Moderate rain': 'assets/animation-ready/rain.svg',
    Blizzard: 'assets/animation-ready/snow.svg',
    Windy: 'assets/animation-ready/wind.svg',
    Tornadoes: 'assets/animation-ready/tornado.svg',
    Tornado: 'assets/animation-ready/tornado.svg',
    Thunderstorm: 'assets/animation-ready/thunderstorms-day.svg',
    Storm: 'assets/animation-ready/thunderstorms-day.svg',
    Stormy: 'assets/animation-ready/thunderstorms-day.svg',
    Thunder: 'assets/animation-ready/thunderstorms-day.svg',
    Thundery: 'assets/animation-ready/thunderstorms-day.svg',
    Temporal: 'assets/animation-ready/thunderstorms-day.svg',
    Cloudy: 'assets/animation-ready/cloudy.svg',
    'Moderate or heavy rain with thunder':
      'assets/animation-ready/thunderstorms-day.svg',
    Fog: 'assets/animation-ready/fog-day.svg',
    Foggy: 'assets/animation-ready/fog-day.svg',
  };

  getWeatherIcon(condition: string): string {
    return this.weatherIcons[condition] || '';
  }

  @ViewChild('cityForm') cityForm!: NgForm;

  weather: any = {};

  constructor(public http: HttpClient) {}

  onSubmit() {
    const cityName = this.cityForm.value.city;

    this.http
      .get(
        `https://api.weatherapi.com/v1/current.json?key=52d462a7ec0644c6941125741230607&q=${cityName}`
      )
      .subscribe((res) => {
        this.weather = res;
      });

    this.value = '';
  }
}
