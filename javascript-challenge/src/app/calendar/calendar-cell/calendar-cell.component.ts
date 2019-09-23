import { Component, OnInit, Input } from "@angular/core";
import { CalendarStoreService } from "src/app/core/stores/calendar-store.service";
import { Reminder } from "src/app/models/Reminder";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CalendarDetailPopup } from "../calendar-detail-popup/calendar-detail-popup.component";
import Utils from "src/app/core/utils";

@Component({
  selector: "app-calendar-cell",
  templateUrl: "./calendar-cell.component.html",
  styleUrls: ["./calendar-cell.component.css"]
})
export class CalendarCellComponent implements OnInit {
  @Input() date: Date;
  currentDayReminders: Reminder[] = [];
  public isHigh = Utils.isHighCategory;
  public isMedium = Utils.isMediumCategory;
  public isLow = Utils.isLowCategory;
  constructor(private calendarStore: CalendarStoreService, private modalService: NgbModal) {}

  ngOnInit() {
    this.calendarStore.reminders$.subscribe(reminders => {
      this.currentDayReminders = reminders.filter(reminder => Utils.compareDate(reminder.date, this.date));
    });
  }

  ViewDetails() {
    const modalRef = this.modalService.open(CalendarDetailPopup);
    modalRef.componentInstance.date = this.date;
    modalRef.componentInstance.type = "Date details";
  }
}
