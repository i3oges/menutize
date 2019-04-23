import { Component, OnInit} from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Location } from '../location';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  location: Location;
  address = new FormControl('');
  address2 = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  zip = new FormControl('');

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    this.locationService.getLocation().subscribe((data: Location) => this.setLocationFormValues(data));
  }
  setLocationFormValues(location: Location) {
    console.log(location);
    this.address.setValue(location.address);
    this.address2.setValue(location.address2);
    this.city.setValue(location.city);
    this.state.setValue(location.state);
    this.zip.setValue(location.zip);
  }
  setLocationForm() {
    return <Location>{
      address: this.address.value,
      address2: this.address2.value,
      city: this.city.value,
      state: this.state.value,
      zip: this.zip.value
    };
  }
  onUpdateLocation() {
    const location = this.setLocationForm();
    this.locationService.updateLocation(location).subscribe(data => {
      console.log(data);
    });
  }
}
