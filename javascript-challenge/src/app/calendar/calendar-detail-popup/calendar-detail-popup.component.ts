import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CalendarStoreService } from "src/app/core/stores/calendar-store.service";

@Component({
  selector: "app-calendar-detail-popup",
  templateUrl: "./calendar-detail-popup.component.html",
  styleUrls: ["./calendar-detail-popup.component.css"]
})
export class CalendarDetailPopup {
  @Input() type: string = "Date details";
  @Input() date: Date;
  selectedReminder: number = 0;
  constructor(public activeModal: NgbActiveModal, private calendarStore: CalendarStoreService) {}

  addReminder() {
    this.selectedReminder = 0;
    this.type = "Reminder form";
  }

  editReminder(data) {
    this.selectedReminder = data;
    this.type = "Reminder form";
  }

  closeForm() {
    this.selectedReminder = 0;
    this.type = "Date details";
  }

  deleteAllReminders() {
    this.calendarStore.removeAllReminders(this.date);
  }
}
