import { Injectable } from '@angular/core';
import { Location } from '../location/location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  getLocation() {
    return this.httpClient.get<Location>('api/v1/location');
  }
}
