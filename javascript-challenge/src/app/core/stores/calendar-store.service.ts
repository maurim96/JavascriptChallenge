import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Reminder } from "src/app/models/Reminder";
import { CalendarService } from "../services/calendar.service";
import Utils from "../utils";

@Injectable({
  providedIn: "root"
})
export class CalendarStoreService {
  constructor(private calendarService: CalendarService) {
    this.fetchMockedReminders();
  }

  private readonly _reminders = new BehaviorSubject<Reminder[]>([]);

  readonly reminders$ = this._reminders.asObservable();

  get reminders(): Reminder[] {
    return this._reminders.getValue();
  }

  set reminders(val: Reminder[]) {
    this._reminders.next(val);
  }

  addReminder(reminder: Reminder) {
    this.reminders = [...this.reminders, reminder];
  }

  removeReminder(id: number) {
    this.reminders = this.reminders.filter(reminder => reminder.id !== id);
  }

  removeAllReminders(date) {
    this.reminders = this.reminders.filter(reminder => !Utils.compareDate(reminder.date, date));
  }

  editReminder(reminder: Reminder) {
    const remSaved = this.reminders.find(x => x.id === reminder.id);
    const index = this.reminders.indexOf(remSaved);

    this.reminders[index] = {
      ...reminder
    };

    this.reminders = [...this.reminders];
  }

  fetchMockedReminders() {
    this.reminders = this.calendarService.getMockedReminders();
  }
}
