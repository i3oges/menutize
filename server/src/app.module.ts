import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MenuController } from './menu/menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { Connection } from 'typeorm';
import { MenuService } from './menu/menu.service';
import { RestaurantInfoController } from './restaurant-info/restaurant-info.controller';
import { RestaurantInfoModule } from './restaurant-info/restaurant-info.module';
import { LocationService } from './restaurant-info/location/location.service';
import { HoursService } from './restaurant-info/hours/hours.service';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MenuModule,
    RestaurantInfoModule,
  ],
  controllers: [AppController, MenuController, RestaurantInfoController],
  providers: [MenuService, LocationService, HoursService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
