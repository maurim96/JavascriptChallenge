import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarGridComponent } from './calendar-grid/calendar-grid.component';
import { CalendarDateDetailsComponent } from './calendar-date-details/calendar-date-details.component';
import { CalendarEventFormComponent } from './calendar-event-form/calendar-event-form.component';
import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [CalendarGridComponent, CalendarDateDetailsComponent, CalendarEventFormComponent, CalendarComponent],
  imports: [
    CommonModule
  ]
})
export class CalendarModule { }
