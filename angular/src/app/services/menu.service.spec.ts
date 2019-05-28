import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddMenuItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ MenuService ],
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });
});
