import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursComponent } from './hours.component';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('HoursComponent', () => {
  let component: HoursComponent;
  let fixture: ComponentFixture<HoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursComponent ],
      imports: [ MatCardModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
