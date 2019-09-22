import { Injectable } from "@angular/core";
import * as moment from "moment";

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
}
