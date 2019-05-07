import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from './location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  location: Location;
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.locationService.getLocation().subscribe((data: Location) => this.location = data);
  }
}
