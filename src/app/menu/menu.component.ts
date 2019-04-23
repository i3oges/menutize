import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { MenuItem } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenuItems();
  }
  getMenuItems() {
    this.menuService.getMenuItems().subscribe((data: MenuItem[]) => data.forEach(item => this.menuItems.push(item) ));
  }
}
