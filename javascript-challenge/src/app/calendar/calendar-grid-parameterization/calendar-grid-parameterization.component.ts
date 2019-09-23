import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import * as moment from "moment";
import { MONTHS } from "../calendar-grid-config-data";
@Component({
  selector: "app-calendar-grid-parameterization",
  templateUrl: "./calendar-grid-parameterization.component.html",
  styleUrls: ["./calendar-grid-parameterization.component.css"]
})
export class CalendarGridParameterizationComponent implements OnInit {
  @Output() emitChanges = new EventEmitter();
  public parameterizationForm: FormGroup;
  public months = MONTHS;

  constructor(private _fb: FormBuilder) {}

  get year() {
    return this.parameterizationForm.get("year");
  }

  get month() {
    return this.parameterizationForm.get("month");
  }

  ngOnInit() {
    this.parameterizationForm = this.buildForm();
    this.subscribeToChanges();
  }

  buildForm() {
    return (this.parameterizationForm = this._fb.group({
      year: [
        moment()
          .toDate()
          .getFullYear()
      ],
      month: [
        moment()
          .toDate()
          .getMonth()
      ]
    }));
  }

  subscribeToChanges() {
    this.year.valueChanges.subscribe(x => this.sendData());
    this.month.valueChanges.subscribe(x => this.sendData());
  }

  sendData() {
    const date = {
      year: this.year.value,
      month: this.month.value
    };
    this.emitChanges.emit(date);
  }
}
