import { Controller, Get, Put, Delete, Post, Body, Param } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuItem } from './menu-item.entity';
import { InsertResult } from 'typeorm';

@Controller('api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Get()
  findAll(): Promise<MenuItem[]> {
    return this.menuService.findAll();
  }

  @Post()
  insert(@Body() item: MenuItem): Promise<InsertResult> {
    return this.menuService.insert(item);
  }

  @Put(':id')
  updateMenuItem(@Param('id') id: number, @Body() item: MenuItem) {
    return this.menuService.updateItem(id, item);
  }

  @Delete(':id')
  removeById(@Param('id') id: number) {
    return this.menuService.removeItem(id);
  }
}
