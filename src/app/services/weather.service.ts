import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityname: string) :Observable<any>
  {
    cityname = '/'+cityname;
    return this.http.get(environment.weatherApiBaseUrl+cityname, {
      headers: new HttpHeaders()
      .set(
        environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostheaderValue
      ).set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
    })

  }
}
