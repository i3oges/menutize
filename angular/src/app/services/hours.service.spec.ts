import { TestBed, inject } from '@angular/core/testing';
import { Hour } from '../hours/hours';
import { HoursService } from './hours.service';
import { HttpClientModule } from '@angular/common/http';
import { HoursMock } from './mock-services';

describe('HoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HoursService, HoursMock ],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([HoursMock], (service: HoursMock) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve hours object from api/location-info/hours', inject([HoursMock], (service: HoursMock) => {
    service.getHours().subscribe((data: Hour[]) => {
      expect(data).toBeTruthy();
    });
  }));
});
