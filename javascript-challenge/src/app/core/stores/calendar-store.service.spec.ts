import { TestBed } from "@angular/core/testing";

import * as moment from "moment";
import { CalendarStoreService } from "./calendar-store.service";
import { Reminder } from "src/app/models/Reminder";

fdescribe("CalendarStoreService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CalendarStoreService = TestBed.get(CalendarStoreService);
    expect(service).toBeTruthy();
  });

  fit("should update reminders", () => {
    const service: CalendarStoreService = TestBed.get(CalendarStoreService);
    const currentLength = service.reminders.length;
    var reminder: Reminder = {
      id: Math.floor(Math.random() * 99999),
      text: "Sample of a reminder",
      country: "Argentina",
      category: 2,
      date: moment().toDate()
    };
    service.addReminder(reminder);
    expect(service.reminders.length).toBeGreaterThan(currentLength);
  });
});
