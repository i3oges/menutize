import { Component, OnInit } from '@angular/core';
import { Hours } from '../hours';
import { HoursService } from '../../services/hours.service';

@Component({
  selector: 'app-update-hours',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateHoursComponent implements OnInit {
  hours: Hours = new Hours();
  Object = Object;
  constructor(private hoursService: HoursService) { }

  ngOnInit() {
  }

  onUpdate() {
    const hoursArr = [];
    Object.keys(this.hours).forEach(element => {
      hoursArr.push({
        dayOfWeek: element,
        open: this.hours[element].open.value,
        close: this.hours[element].close.value
      });
    });
    this.hoursService.updateHours(hoursArr).subscribe(data => {
      console.log(data);
    });
  }
}
