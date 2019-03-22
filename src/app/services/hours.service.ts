import { Injectable } from '@angular/core';
import { Hours } from '../hours/hours';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(private httpClient: HttpClient) { }

  getHours() {
    return this.httpClient.get<Hours>('api/v1/hours');
  }
}
