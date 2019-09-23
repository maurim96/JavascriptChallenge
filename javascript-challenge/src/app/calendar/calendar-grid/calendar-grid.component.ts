import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import * as moment from "moment";
import { WEEK_DAYS } from "../calendar-grid-config-data";
import { CalendarService } from "src/app/core/services/calendar.service";
import { CalendarStoreService } from "src/app/core/stores/calendar-store.service";

@Component({
  selector: "app-calendar-grid",
  templateUrl: "./calendar-grid.component.html",
  styleUrls: ["./calendar-grid.component.css"]
})
export class CalendarGridComponent implements OnInit, OnChanges {
  public weekDays = WEEK_DAYS;
  public calendar = [];
  @Input() selectedMonth = moment()
    .toDate()
    .getMonth();
  @Input() selectedYear = moment()
    .toDate()
    .getFullYear();

  constructor(private calendarService: CalendarService, private calendarStore: CalendarStoreService) {}

  ngOnInit() {
    this.calendarStore.reminders$.subscribe(reminders => {
      this.updateCalendar();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
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
