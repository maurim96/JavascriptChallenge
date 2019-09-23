import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_KEY = "c9bf97bcb846aef2dd44992f87b81ddd";
@Injectable({
  providedIn: "root"
})
export class WeatherService {
  baseUrl: string;
  constructor(private _http: HttpClient) {
    this.baseUrl = "http://api.openweathermap.org/data/2.5/weather";
  }

  getCityWeather(cityId) {
    var resourceUrl = `${this.baseUrl}?id=${cityId}&appid=${API_KEY}`;

    return this._http.get(resourceUrl);
  }
}
