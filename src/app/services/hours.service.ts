import { Injectable } from '@angular/core';
import { Hours, H } from '../hours/hours';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(private httpClient: HttpClient) { }

  getHours() {
    return this.httpClient.get<Hours>('api/restaurant-info/hours');
  }

  updateHours(hours: H[]) {
    return this.httpClient.put<H[]>('api/restaurant-info/hours', hours);
  }
}
