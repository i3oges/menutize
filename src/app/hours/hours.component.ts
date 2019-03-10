import { Component, OnInit } from "@angular/core";
import { Hours } from './hours';
import { HoursService } from '../services/hours.service';

@Component({
  selector: "app-hours",
  templateUrl: "./hours.component.html",
  styleUrls: ["./hours.component.scss"]
})
export class HoursComponent implements OnInit {
  constructor(private hoursService: HoursService) {}
  Object = Object;
  hours: Hours;
  ngOnInit() {
    this.getHours();
  }

  getHours() {
    this.hours = this.hoursService.getHours();
  }
}
