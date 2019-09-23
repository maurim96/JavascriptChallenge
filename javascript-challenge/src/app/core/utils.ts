import * as moment from "moment";
import { CITIES } from "../calendar/calendar-grid-config-data";

export default class Utils {
  static compareYear(firstDate, secondDate): Boolean {
    return (
      moment(firstDate)
        .toDate()
        .getFullYear() ==
      moment(secondDate)
        .toDate()
        .getFullYear()
    );
  }

  static compareMonth(firstDate, secondDate): Boolean {
    return (
      moment(firstDate)
        .toDate()
        .getMonth() ==
      moment(secondDate)
        .toDate()
        .getMonth()
    );
  }

  static compareDay(firstDate, secondDate): Boolean {
    return (
      moment(firstDate)
        .toDate()
        .getDate() ==
      moment(secondDate)
        .toDate()
        .getDate()
    );
  }

  static compareDate(firstDate, secondDate): Boolean {
    var result = true;
    if (!this.compareYear(firstDate, secondDate)) result = false;
    if (!this.compareMonth(firstDate, secondDate)) result = false;
    if (!this.compareDay(firstDate, secondDate)) result = false;

    return result;
  }

  static checkReminderCategory(idCategory) {
    switch (idCategory) {
      case 0:
        return "Low";
      case 1:
        return "Medium";
      case 2:
        return "High";
    }
  }

  static isHighCategory(idCategory) {
    return idCategory == 2 ? true : false;
  }

  static isMediumCategory(idCategory) {
    return idCategory == 1 ? true : false;
  }

  static isLowCategory(idCategory) {
    return idCategory == 0 ? true : false;
  }

  static checkCityName(cityId) {
    var city = CITIES.find(city => city.id == cityId);
    return city != undefined ? city["text"] : null;
  }

  static getCelsiusTemp(tempInKelvin) {
    return Math.round(tempInKelvin - 273.15);
  }
}
