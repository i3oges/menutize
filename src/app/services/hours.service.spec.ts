import { TestBed, inject } from '@angular/core/testing';
import { Hours } from '../hours/hours';
import { HoursService } from './hours.service';

describe('HoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoursService]
    });
  });

  it('should be created', inject([HoursService], (service: HoursService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve hours object from api', inject([HoursService], (service: HoursService) => {
    service.getHours().subscribe((data: Hours) => {
      console.log(data);
    });
  }));
});
