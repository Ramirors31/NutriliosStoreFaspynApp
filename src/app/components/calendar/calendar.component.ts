import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarService } from 'src/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  @Input() selectedWeek: any;
  @Input() actualDate: Date;
  @Output() calendarModeSwapEvent: EventEmitter<any> = new EventEmitter();
  showingCalendarDays: any;
  selectedCalendarMode = 'weeklyView';
  // selectedCalendarMode = 'weeklyView';
  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
    this.showingCalendarDays = this.calendarService.getSelectedWeekDays(this.selectedWeek.dateObj);
  }

  calendarModeSwap(){
    if (this.selectedCalendarMode === 'monthlyView') {
      this.showingCalendarDays =  this.calendarService.getSelectedMonth(this.actualDate);
    } else if (this.selectedCalendarMode === 'weeklyView') {
      this.showingCalendarDays = this.calendarService.getSelectedWeekDays(this.selectedWeek.dateObj);
    }
    this.calendarModeSwapEvent.emit(this.selectedCalendarMode);
  }

}
