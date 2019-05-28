import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { MenuComponent } from './menu.component';
import { MaterialModule } from '../modules/material.module';
import { MenuService } from '../services/menu.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MenuItem } from './menu';

let menuServiceStub: Partial<MenuService>;
let el, menuService;
describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    menuServiceStub = {
      getMenuItems: (): Observable<MenuItem[]> => {
        return of([
          { name: 'burger', description: 'its a burger', price: 4},
          { name: 'sandwich', description: 'its sandwich', price: 6}
        ])
      }
    }

    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      providers: [ { provide: MenuService, useValue: menuServiceStub }  ],
      imports: [ MaterialModule ]
    });
    
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;

    menuService = TestBed.get(MenuService);

    fixture.detectChanges();

    el = fixture.nativeElement.querySelector('p');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
