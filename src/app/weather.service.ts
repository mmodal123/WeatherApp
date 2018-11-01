import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Location} from './location';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  lat: number;
  lon: number;

 // url = 'https://weatherbit-v1-mashape.p.mashape.com/current?lat=' + this.lat + '&lon=' + this.lon;

  constructor(private http: HttpClient) {

   }

  weather(location: Location): Observable<any> {

    this.lat = parseFloat(location.latitude);
    this.lon = parseFloat(location.longitude);

    const headers = new HttpHeaders()
             .set('X-Mashape-Key', '0JLBKYq2OjmshWNxEkzneQpvnkTFp1AMEpRjsngMVWjwR3kwkN')
             .set('Accept', 'application/json');

    return this.http.get('https://weatherbit-v1-mashape.p.mashape.com/current?lat=' + this.lat + '&lon=' + this.lon, { headers: headers });
  }
}
