import { Controller, Get, Put, Delete, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';

@Controller('api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Get()
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }
}
