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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CalendarDetailPopup } from "./calendar-detail-popup/calendar-detail-popup.component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { CalendarGridParameterizationComponent } from "./calendar-grid-parameterization/calendar-grid-parameterization.component";

@NgModule({
  declarations: [
    CalendarGridComponent,
    CalendarDateDetailsComponent,
    CalendarEventFormComponent,
    CalendarComponent,
    CalendarCellComponent,
    CalendarDetailPopup,
    CalendarGridParameterizationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports: [CalendarComponent],
  providers: [CalendarStoreService, CalendarService],
  entryComponents: [CalendarDetailPopup]
})
export class CalendarModule {}
