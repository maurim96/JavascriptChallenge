import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { CalendarStoreService } from "src/app/core/stores/calendar-store.service";
import { Reminder } from "src/app/models/Reminder";
import Utils from "src/app/core/utils";

@Component({
  selector: "app-calendar-date-details",
  templateUrl: "./calendar-date-details.component.html",
  styleUrls: ["./calendar-date-details.component.css"]
})
export class CalendarDateDetailsComponent implements OnInit {
  @Input() date: Date;
  @Output() showForm = new EventEmitter();
  public reminders: Reminder[] = [];
  public checkReminderCategory = Utils.checkReminderCategory;
  public isHigh = Utils.isHighCategory;
  public isMedium = Utils.isMediumCategory;
  public isLow = Utils.isLowCategory;
  constructor(private calendarStore: CalendarStoreService) {}

  ngOnInit() {
    this.calendarStore.reminders$.subscribe(reminders => {
      this.reminders = reminders.filter(reminder => Utils.compareDate(reminder.date, this.date));
    });
  }

  editReminder(idReminder) {
    this.showForm.emit(idReminder);
  }

  deleteReminder(idReminder) {
    this.calendarStore.removeReminder(idReminder);
  }
}
