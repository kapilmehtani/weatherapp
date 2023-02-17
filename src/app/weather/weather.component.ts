import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather:any;
  cityname:string = "hisar";

  constructor( private weatherservice: WeatherService) { }

  ngOnInit(): void {
  this.getData(this.cityname);
  this.cityname = "";
  }

  onSubmit()
  {
    this.getData(this.cityname);
    this.cityname = "";
  }
  getData(cityname: string)
  {
    this.weatherservice.getWeatherData(cityname)
    .subscribe({
      next:(res)=>{
        this.weather = res;
        console.log(this.weather);
        console.log(this.weather.main.temp_max);
      }
    })
  }

}
