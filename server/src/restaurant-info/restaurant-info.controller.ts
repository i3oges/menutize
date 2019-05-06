import { Controller, Get, Put, Body } from '@nestjs/common';
import { LocationService } from './location/location.service';
import { HoursService } from './hours/hours.service';
import { Hours } from './hours/hours.entity';
import { Location } from './location/location.entity';

@Controller('api/restaurant-info')
export class RestaurantInfoController {
  constructor(
    private readonly locationService: LocationService,
    private readonly hoursService: HoursService,
  ) {}
  @Get('hours')
  findHours(): Promise<Hours[]> {
    return this.hoursService.findAll();
  }

  @Get('location')
  findLocation(): Promise<Location> {
    return this.locationService.find();
  }

  @Put('hours')
  updateHours(@Body() hours: Hours[]): Promise<Hours[]> {
    return this.hoursService.update(hours);
  }

  @Put('location')
  updateLocation(@Body() location: Location): Promise<Location> {
    return this.locationService.update(location);
  }
}
