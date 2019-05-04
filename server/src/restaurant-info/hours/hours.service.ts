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

  findAll() {
    return this.hoursRepository.find();
  }
}
