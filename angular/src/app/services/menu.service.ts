import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../menu/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  addMenuItem(menuItem: MenuItem): Observable<MenuItem> {
    return this.httpClient.post<MenuItem>('api/menu', menuItem);
  }

  getMenuItems(): Observable<any> {
    return this.httpClient.get<MenuItem[]>('api/menu/');
  }
}
