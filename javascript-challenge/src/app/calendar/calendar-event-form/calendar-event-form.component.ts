import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CalendarStoreService } from "src/app/core/stores/calendar-store.service";
import { Reminder } from "src/app/models/Reminder";
import * as moment from "moment";
import Utils from "src/app/core/utils";
import { CITIES } from "../calendar-grid-config-data";
@Component({
  selector: "app-calendar-event-form",
  templateUrl: "./calendar-event-form.component.html",
  styleUrls: ["./calendar-event-form.component.css"]
})
export class CalendarEventFormComponent implements OnInit {
  @Input() idReminder: number = 0;
  @Input() selectedDate: Date = moment().toDate();
  @Output() reminderSaved = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  public isHigh = Utils.isHighCategory;
  public isMedium = Utils.isMediumCategory;
  public isLow = Utils.isLowCategory;
  public reminderForm: FormGroup;
  public reminder: Reminder;
  public cities = CITIES;
  get id() {
    return this.reminderForm.get("id").value;
  }
  get text() {
    return this.reminderForm.get("text").value;
  }
  get city() {
    return this.reminderForm.get("city").value;
  }
  get category() {
    return this.reminderForm.get("category").value;
  }
  get date() {
    return this.reminderForm.get("date").value;
  }

  constructor(private _fb: FormBuilder, private calendarStore: CalendarStoreService) {}

  ngOnInit() {
    if (this.idReminder != 0) {
      this.calendarStore.reminders$.subscribe(reminders => {
        this.reminder = reminders.find(reminder => reminder.id == this.idReminder);
        this.reminderForm = this.buildForm();
      });
    } else {
      this.reminderForm = this.buildForm();
    }
  }

  buildForm() {
    return this._fb.group({
      id: [this.reminder ? this.reminder.id : Math.floor(Math.random() * 99999), Validators.required],
      text: [this.reminder ? this.reminder.text : "", [Validators.required, Validators.maxLength(30)]],
      city: [this.reminder ? this.reminder.city : 3435910],
      category: [this.reminder ? this.reminder.category : 0, Validators.required],
      date: [this.reminder ? this.reminder.date : this.selectedDate, Validators.required]
    });
  }

  saveReminder() {
    const reminder: Reminder = {
      id: this.id,
      text: this.text,
      city: +this.city,
      category: +this.category,
      date: this.date
    };
    
    if (this.idReminder != 0) {
      this.calendarStore.editReminder(reminder);
    } else {
      this.calendarStore.addReminder(reminder);
    }
    this.reminderSaved.emit();
  }

  exit() {
    this.closeForm.emit();
  }
}
