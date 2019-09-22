import { Component, OnInit } from "@angular/core";
import { CalendarStoreService } from "src/app/core/stores/calendar-store.service";
import * as moment from "moment";
import { WEEK_DAYS, MONTHS } from "./calendar-grid-config-data";
import { CalendarService } from "src/app/core/services/calendar.service";

@Component({
  selector: "app-calendar-grid",
  templateUrl: "./calendar-grid.component.html",
  styleUrls: ["./calendar-grid.component.css"]
})
export class CalendarGridComponent implements OnInit {
  public weekDays = WEEK_DAYS;
  public months = MONTHS;
  public calendar = [];
  public selectedMonth = 10;
  public selectedYear = 2019;

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.updateCalendar();
  }

  updateCalendar() {
    this.calendar = this.calendarService.getCalendar(this.selectedYear, this.selectedMonth);
  }
  
  checkMonth(date: Date) {
    let result = false;
    date.getMonth() != this.selectedMonth ? (result = true) : (result = false);
    return result;
  }
}
