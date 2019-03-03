import { Component, OnInit } from "@angular/core";
import { Hours } from './hours';

@Component({
  selector: "app-hours",
  templateUrl: "./hours.component.html",
  styleUrls: ["./hours.component.scss"]
})
export class HoursComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
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
