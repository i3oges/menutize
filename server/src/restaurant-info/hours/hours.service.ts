import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hours } from './hours.entity';

@Injectable()
export class HoursService {
  constructor(
    @InjectRepository(Hours)
    private readonly hoursRepository: Repository<Hours>,
  ) {}

  async findAll() {
    const sorted = [];
    let hours = await this.hoursRepository.find();
    ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].forEach(s => {
      const found = hours.find(h => h.dayOfWeek === s)
      sorted.push(found);
    });
    return sorted;
  }

  update(hours: Hours[]) {
   return this.hoursRepository.save(hours);
  }
}
