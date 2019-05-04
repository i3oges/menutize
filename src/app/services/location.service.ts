import { Injectable } from '@angular/core';
import { Location } from '../location/location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  getLocation(): Observable<Location> {
    return this.httpClient.get<Location>('api/restaurant-info/location');
  }
  updateLocation(location: Location): Observable<any> {
    return this.httpClient.post<Location>('api/restaurant-info/location', location);
  }
}
