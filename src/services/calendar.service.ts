/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { AuxFnsService } from './aux-fns.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  daysOfTheWeek = [
    'Lun',
    'Mar',
    'Mie',
    'Jue',
    'Vie',
    'Sab',
    'Dom',
  ];

  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  constructor(public auxFns: AuxFnsService) { }


  getActualWeekMondayDate() {
    const actualDate: Date = new Date();
    actualDate.setHours(0,0,0,0);
    let dayOfTheWeek = actualDate.getDay();
    //DOMINGO ES EL DIA 0 CHECAR EL CICLO FIXME
    if(dayOfTheWeek === 1) {
      return this.auxFns.getFormatDate(actualDate).formatDate;
    } else {
      while(dayOfTheWeek > 1 ){
        if (dayOfTheWeek === 0) {
          dayOfTheWeek = 7;
        }
        actualDate.setDate(actualDate.getDate() - 1);
        dayOfTheWeek --;
      }
    };
    return  {
      formatDate: this.auxFns.getFormatDate(actualDate).formatDate,
      dateObj: actualDate,
    };
  }

  getSelectedWeekDays(mondayDate: Date) {
    const daysOfTheMonth: any = [];
    const refDate = mondayDate;
    let i = 0;
    while (i <= 6) {
      daysOfTheMonth.push({
        day: refDate.getDate(),
        dateObj: refDate,
      });

      refDate.setDate(refDate.getDate() + 1);
      i ++;
    }
    return daysOfTheMonth;
  }

  getSelectedMonth(actualDate: Date) {
    let daysOfTheMonth: any = [];
    const actualMonth = actualDate.getMonth();
    actualDate.setHours(0,0,0,0);
    let refDate = actualDate;
    while (refDate.getMonth() === actualMonth) {
      refDate.setDate(refDate.getDate() - 1);
    }
    refDate.setDate(refDate.getDate() + 1);
    while(refDate.getMonth() === actualMonth) {
      daysOfTheMonth.push({
        day: refDate.getDate(),
        dateObj: refDate,
      });
      refDate.setDate(refDate.getDate() + 1);
    }
    return daysOfTheMonth;
  }

  goForwardWeek(date: Date) {
    date.setDate(date.getDate() + 7);
    return this.auxFns.getFormatDate(date);
  }

  goBackWeek(date: Date) {
    date.setDate(date.getDate() - 7);
    return this.auxFns.getFormatDate(date);
  }
}
