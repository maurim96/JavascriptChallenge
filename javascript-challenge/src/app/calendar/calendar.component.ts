import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  selectedMonth: number = moment()
    .toDate()
    .getMonth();
  selectedYear: number = moment()
    .toDate()
    .getFullYear();
  constructor() {}

  ngOnInit() {}

  dateChanged(data) {
    this.selectedMonth = data.month;
    this.selectedYear = data.year;
  }
}
