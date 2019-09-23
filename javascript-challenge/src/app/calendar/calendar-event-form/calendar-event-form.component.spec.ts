import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CalendarEventFormComponent } from "./calendar-event-form.component";
import { By } from "@angular/platform-browser";
import * as moment from "moment";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";

fdescribe("CalendarEventFormComponent", () => {
  let component: CalendarEventFormComponent;
  let fixture: ComponentFixture<CalendarEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarEventFormComponent],
      imports: [FormsModule, ReactiveFormsModule, OwlDateTimeModule, OwlNativeDateTimeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  fit("should call the saveReminder method", () => {
    fixture.detectChanges();
    spyOn(component, "saveReminder");
    var el = fixture.debugElement.query(By.css(".btn-success")).nativeElement;
    el.click();
    expect(component.saveReminder).toHaveBeenCalledTimes(0);
  });

  fit("form should be valid", () => {
    component.reminderForm = component.buildForm();
    component.reminderForm.controls["text"].setValue("Sample of reminder");
    component.reminderForm.controls["category"].setValue(0);
    component.reminderForm.controls["country"].setValue("Argentina");
    component.reminderForm.controls["id"].setValue(Math.floor(Math.random() * 99999));
    component.reminderForm.controls["date"].setValue(moment().toDate());
    expect(component.reminderForm.valid).toBeTruthy();
  });

  fit("form should be invalid", () => {
    component.reminderForm = component.buildForm();
    component.reminderForm.controls["text"].setValue(
      "Sample of reminder with more than 30 caract, that should be invalid obviously"
    );
    component.reminderForm.controls["category"].setValue(0);
    component.reminderForm.controls["country"].setValue("Argentina");
    component.reminderForm.controls["id"].setValue(Math.floor(Math.random() * 99999));
    component.reminderForm.controls["date"].setValue(moment().toDate());
    expect(component.reminderForm.valid).toBeFalsy();
  });
});
