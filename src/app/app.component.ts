import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Location } from './location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'weatherApp';
  available = false;

  userLocation = new Location('27', '78');

  response = [];

  constructor(private svc: WeatherService) {


  }

  ngOnInit(): void {

  }

  OnSubmit() {

      this.svc.weather(this.userLocation).subscribe(
        (value) => {
          this.response.push(value);
          this.available = true;
        });
  }


}
