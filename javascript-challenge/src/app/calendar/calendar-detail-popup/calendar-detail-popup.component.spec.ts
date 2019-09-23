import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CalendarDetailPopup } from "./calendar-detail-popup.component";

describe("CalendarDetailPopupComponent", () => {
  let component: CalendarDetailPopup;
  let fixture: ComponentFixture<CalendarDetailPopup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarDetailPopup]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDetailPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
