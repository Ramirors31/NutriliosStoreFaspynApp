import { Component, OnInit } from '@angular/core';
import { AdminCutsService } from 'src/services/admin-cuts.service';
import { AuxFnsService } from 'src/services/aux-fns.service';
import { CalendarService } from 'src/services/calendar.service';

@Component({
  selector: 'app-admin-cuts',
  templateUrl: './admin-cuts.page.html',
  styleUrls: ['./admin-cuts.page.scss'],
})
export class AdminCutsPage implements OnInit {

  showingWeek: any;
  selectedWeek: any;
  liveWeek: any;
  showingMonth: any;
  selectedCalendarMode = 'weeklyView';

  constructor(public adminCutsService: AdminCutsService,public  auxFns: AuxFnsService, public calendarService: CalendarService) { }

  ngOnInit() {
    this.liveWeek = this.calendarService.getActualWeekMondayDate();
    this.selectedWeek = this.liveWeek;
  }

  todayIs(): Date {
    return new Date();
  }
  getTodaysDate() {
    const todaysDate = new Date();
    return this.auxFns.getFormatDate(todaysDate).formatDate;
  }

  calendarModeSwap($event) {
    this.selectedCalendarMode = $event;
  }

  displaySelectedDateMonth() {
    if (this.selectedCalendarMode === 'weeklyView') {
      return this.getActualWeekMonday().formatDate;
    } else if (this.selectedCalendarMode === 'monthlyView') {
      return this.auxFns.getMonthFormat(new Date());
    }
  }


  getActualWeekMonday(): any {
    return this.calendarService.getActualWeekMondayDate();
  }

  goBackWeek() {
    this.selectedWeek = this.calendarService.goBackWeek(this.selectedWeek.dateObj);
  }

  goForwardWeek() {
    this.selectedWeek = this.calendarService.goForwardWeek(this.selectedWeek.dateObj);
  }

}
