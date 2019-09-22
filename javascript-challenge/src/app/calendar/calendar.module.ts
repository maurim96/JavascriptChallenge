import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarGridComponent } from "./calendar-grid/calendar-grid.component";
import { CalendarDateDetailsComponent } from "./calendar-date-details/calendar-date-details.component";
import { CalendarEventFormComponent } from "./calendar-event-form/calendar-event-form.component";
import { CalendarComponent } from "./calendar.component";
import { CalendarStoreService } from "../core/stores/calendar-store.service";
import { CalendarCellComponent } from "./calendar-cell/calendar-cell.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalendarService } from "../core/services/calendar.service";

@NgModule({
  declarations: [
    CalendarGridComponent,
    CalendarDateDetailsComponent,
    CalendarEventFormComponent,
    CalendarComponent,
    CalendarCellComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CalendarComponent],
  providers: [CalendarStoreService, CalendarService]
})
export class CalendarModule {}
