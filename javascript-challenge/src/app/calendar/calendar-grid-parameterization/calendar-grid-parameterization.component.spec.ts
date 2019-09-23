import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGridParameterizationComponent } from './calendar-grid-parameterization.component';

describe('CalendarGridParameterizationComponent', () => {
  let component: CalendarGridParameterizationComponent;
  let fixture: ComponentFixture<CalendarGridParameterizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarGridParameterizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarGridParameterizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
