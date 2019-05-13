import { Injectable } from '@angular/core';
import { Hour } from '../hours/hours';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(private httpClient: HttpClient) { }

  getHours() {
    return this.httpClient.get<Hour[]>('api/restaurant-info/hours');
  }

  updateHours(hours: Hour[]) {
    return this.httpClient.put<Hour[]>('api/restaurant-info/hours', hours);
  }
}
