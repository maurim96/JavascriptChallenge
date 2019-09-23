import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Reminder } from "src/app/models/Reminder";

@Injectable({
  providedIn: "root"
})
export class CalendarService {
  constructor() {}

  getCalendar(year, month) {
    var startDate = moment([year, month]);
    var firstDay = moment(startDate).startOf("month");
    var endDay = moment(startDate).endOf("month");
    var firstWeek = firstDay.week();
    var lastWeek = endDay.week();
    var weeks = [];
    weeks = this.getWeeksInMonth(firstWeek, lastWeek);
    return this.buildCalendar(weeks, year, month);
  }

  getWeeksInMonth(firstWeek, lastWeek) {
    var weeks = [];
    var i = firstWeek;
    if (i > lastWeek) {
      //In case we swtich to next year
      let weeksInYear = moment().weeksInYear();
      while (i <= weeksInYear) {
        weeks.push(i);
        i++;
      }
      weeks.push(lastWeek);
    } else {
      while (i <= lastWeek) {
        weeks.push(i);
        i++;
      }
    }
    return weeks;
  }

  buildCalendar(weeks, year, month) {
    var calendar = [];
    weeks.forEach((week, index) => {
      if (index > 0 && week < weeks[index - 1]) {
        //In case we swtich to next year
        var firstWeekDay = moment([year, month])
          .add(1, "year")
          .week(week)
          .day(0);
        var lastWeekDay = moment([year, month])
          .add(1, "year")
          .week(week)
          .day(6);
      } else {
        var firstWeekDay = moment([year, month])
          .week(week)
          .day(0);
        var lastWeekDay = moment([year, month])
          .week(week)
          .day(6);
      }
      let weekRange = [];
      let x = firstWeekDay.toDate().getDay();
      while (x <= lastWeekDay.toDate().getDay()) {
        weekRange.push(
          moment(firstWeekDay)
            .add("day", x)
            .toDate()
        );
        x++;
      }
      calendar.push(weekRange);
    });
    return calendar;
  }

  getMockedReminders(): Reminder[] {
    return this.createMockReminder();
  }

  private createMockReminder(): Reminder[] {
    var reminder: Reminder = {
      id: Math.floor(Math.random() * 99999),
      text: "Sample of a reminder",
      city: 3435910,
      category: 2,
      date: moment().toDate()
    };

    var reminder2: Reminder = {
      id: Math.floor(Math.random() * 99999),
      text: "Second reminder",
      city: 3838583,
      category: 1,
      date: moment()
        .add(3, "day")
        .add(2, "hour")
        .toDate()
    };

    return [reminder, reminder2];
  }
}
