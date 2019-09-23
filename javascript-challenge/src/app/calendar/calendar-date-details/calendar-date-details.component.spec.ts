import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDateDetailsComponent } from './calendar-date-details.component';

describe('CalendarDateDetailsComponent', () => {
  let component: CalendarDateDetailsComponent;
  let fixture: ComponentFixture<CalendarDateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
