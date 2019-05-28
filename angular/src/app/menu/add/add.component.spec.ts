import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { AddComponent } from './add.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { FormControl } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from '../menu';

let menuServiceStub: Partial<MenuService>;
let el, menuService;

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent ],
      providers: [ { provide: MenuService, useValue: menuServiceStub } ],
      imports: [ MaterialModule, FormControl ]
    })
    const name = new FormControl('');
    const description = new FormControl('');
    const price = new FormControl('');

    menuServiceStub = {
      addMenuItem: (): Observable<MenuItem> => of({ name: 'burger', description: 'its a burger', price: 4})
    }

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    component.name = name;
    component.description = description;
    component.price = price;

    menuService = TestBed.get(MenuService);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('#add-menu');
  });

  it('should create', () => {
    console.log(el);
    expect(component).toBeTruthy();
  });
});
