import { Component, OnInit } from '@angular/core';
import { Hour, ControlledHour } from '../hours';
import { HoursService } from '../../services/hours.service';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-hours',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateHoursComponent implements OnInit {
  isUpdated = false;
  hours: ControlledHour[] = [
    {open: new FormControl(''), close: new FormControl(''), dayOfWeek: 'monday'},
    {open: new FormControl(''), close: new FormControl(''), dayOfWeek: 'tuesday'},
    {open: new FormControl(''), close: new FormControl(''), dayOfWeek: 'wednesday'},
    {open: new FormControl(''), close: new FormControl(''), dayOfWeek: 'thursday'},
    {open: new FormControl(''), close: new FormControl(''), dayOfWeek: 'friday'},
    {open: new FormControl(''), close: new FormControl(''), dayOfWeek: 'saturday'},
    {open: new FormControl(''), close: new FormControl(''), dayOfWeek: 'sunday'},
  ];
  constructor(
    private hoursService: HoursService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.assignInitialValues();
  }

  assignInitialValues() {
    this.hoursService.getHours().subscribe((data: Hour[]) => {
      data.forEach((el: Hour, index) => {
        this.hours[index].open.setValue(el.open);
        this.hours[index].close.setValue(el.close);
      })
    });
  }

  onUpdate() {
    const hoursArr: Hour[] = [];
    this.hours.forEach((el: ControlledHour, index) => hoursArr.push({
      open: this.hours[index].open.value,
      close: this.hours[index].close.value,
      dayOfWeek: el.dayOfWeek,
    }));
    this.hoursService.updateHours(hoursArr).subscribe(data => {
      this.matSnackBar.open('Hours updated Successfully', '', {
        duration: 4000
      });
    });
  }
}
