import { Injectable } from '@angular/core';
import { CalendarService } from './calendar.service';

@Injectable({
  providedIn: 'root'
})
export class AuxFnsService {
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

  constructor() { }

  getFormatDate(date: Date) {
    date.setHours(0,0,0,0);
    const dateObj = {
      dateObj: date,
      date: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      dayOfWeek: date.getDay(),
      formatDate: `${date.getDate()}/${this.getStringMonth(date.getMonth())}/${date.getFullYear()}`
    };
    return dateObj;
  }

  getMonthFormat(actualDate: Date): string {
    const month = this.months[actualDate.getMonth()];
    const year = actualDate.getFullYear();
    return `${month}/${year}`;
  }

  getStringMonth(month: number) {
    const monthsStrings = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Agosto',
      'Sept',
      'Oct',
      'Nov',
      'Dic'
    ];
    return monthsStrings[month];
  }
}
