import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-calendar-event-form",
  templateUrl: "./calendar-event-form.component.html",
  styleUrls: ["./calendar-event-form.component.css"]
})
export class CalendarEventFormComponent implements OnInit {
  public eventForm: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.eventForm = this.buildForm();
  }

  buildForm() {
    return this._fb.group({
      id: [Math.floor(Math.random() * 99999), Validators.required],
      title: ["", Validators.required],
      content: [""],
      category: [0, Validators.required],
      date: [null, Validators.required]
    });
  }

  saveEvent() {}
}
