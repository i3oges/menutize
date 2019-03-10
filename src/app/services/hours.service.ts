import { Injectable } from '@angular/core';
import { Hours } from '../hours/hours';


@Injectable({
  providedIn: 'root'
})
export class HoursService {
  
  constructor() { }

  getHours() {
    return this.hours;
  }
  
  hours = <Hours>{
    sunday: {
      open: 5,
      close: 18
    },
    monday: {
      open: 5,
      close: 21
    },
    tuesday: {
      open: 5,
      close: 21
    },
    wednesday: {
      open: 6,
      close: 21
    },
    thursday: {
      open: 3,
      close: 19
    },
    friday: {
      open: 6,
      close: 2
    },
    saturday: {
      open: 10,
      close: 21
    }
  };
}
