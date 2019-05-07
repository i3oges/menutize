import { TestBed, inject } from '@angular/core/testing';
import { Hours } from '../hours/hours';
import { HoursService } from './hours.service';
import { HttpClientModule } from '@angular/common/http';

describe('HoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HoursService ],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([HoursService], (service: HoursService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve hours object from api/v1/hours', inject([HoursService], (service: HoursService) => {
    service.getHours().subscribe((data: Hours) => {
      expect(data).toBeTruthy();
    });
  }));
});
