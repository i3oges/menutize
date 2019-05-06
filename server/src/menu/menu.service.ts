import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { MenuItem } from './menu-item.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuItem)
    private readonly menuRepository: Repository<MenuItem>,
  ) {}

  findAll(): Promise<MenuItem[]> {
    return this.menuRepository.find();
  }

  insert(item: MenuItem): Promise<InsertResult> {
    return this.menuRepository.insert(item);
  }

  updateItem(id: number, item: MenuItem) {
    return this.menuRepository.update(id, item);
  }

  removeItem(id: number) {
    return this.menuRepository.delete(id);
  }
}
