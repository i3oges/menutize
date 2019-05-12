import { Component, OnInit, Input } from '@angular/core';
import { Hours } from '../hours';
import { HoursService } from '../../services/hours.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-hours',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateHoursComponent implements OnInit {
  hours: Hours = new Hours();
  Object = Object;
  isUpdated = false;
  constructor(
    private hoursService: HoursService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.assignInitialValues();
  }

  assignInitialValues() {
    this.hoursService.getHours().subscribe((data: any) => {
      Object.keys(data).forEach((element: any) => {
        this.hours[data[element].dayOfWeek].open.setValue(data[element].open);
        this.hours[data[element].dayOfWeek].close.setValue(data[element].close);
      })
    });
  }

  onUpdate() {
    const hoursArr = [];
    Object.keys(this.hours).forEach(element => hoursArr.push({
      dayOfWeek: element,
      open: this.hours[element].open.value,
      close: this.hours[element].close.value
    }));
    this.hoursService.updateHours(hoursArr).subscribe(data => {
      this.matSnackBar.open('Hours updated Successfully', '', {
        duration: 4000
      });
    });
  }
}
