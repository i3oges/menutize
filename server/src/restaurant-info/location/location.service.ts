import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  find(): Promise<Location> {
    return this.locationRepository.findOne();
  }

  update(location: Location) {
    return this.locationRepository.save(location);
  }
}
