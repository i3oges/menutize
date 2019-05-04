import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location/location.entity';
import { Hours } from './hours/hours.entity';
import { RestaurantInfoController } from './restaurant-info.controller';
import { LocationService } from './location/location.service';
import { HoursService } from './hours/hours.service';

@Module({
  imports: [TypeOrmModule.forFeature([Location, Hours])],
  controllers: [RestaurantInfoController],
  providers: [LocationService, HoursService]
})
export class RestaurantInfoModule {}