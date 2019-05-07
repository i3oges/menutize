import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu';
import { FormControl } from '@angular/forms';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  name = new FormControl('');
  description = new FormControl('');
  price = new FormControl('');

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  onAddMenuItem() {
    const menuItem: MenuItem = {
      name: this.name.value,
      description: this.description.value,
      price: this.price.value
    };
    console.log('Menu item', menuItem);
    this.menuService.addMenuItem(menuItem).subscribe(res => {
      console.log(res);
    });
  }

}
