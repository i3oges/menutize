import { Component, OnInit } from '@angular/core';
import { Hour } from './hours';
import { HoursService } from '../services/hours.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {
  constructor(private hoursService: HoursService) {}
  hours: Hour[] = [];
  ngOnInit() {
    this.getHours();
  }

  getHours() {
    this.hoursService.getHours().subscribe(hours => {
      hours.forEach(hour => {
        this.hours.push(this.makePretty(hour));
      })
    });
  }

  makePretty(hour: Hour) {
    return {
      dayOfWeek: this.prettyDay(hour.dayOfWeek),
      open: this.prettyTime(hour.open),
      close: this.prettyTime(hour.close),
    }
  }
  
  prettyTime(time: string) {
    const H = +time.substr(0, 2);
    const h = H % 12 || 12;
    const ampm = (H < 12 || H === 24) ? "AM" : "PM";
    return h + time.substr(2, 3) + ampm;
  }

  prettyDay(day: string) {
    return day.slice(0, 1).toUpperCase() + day.slice(1);
  }
}
