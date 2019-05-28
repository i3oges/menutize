import { of, Observable } from 'rxjs';
import { Hour } from '../hours/hours';

export class HoursMock {
  getHours(): Observable<Hour[]> {
    const hour: Hour[] = [
      {dayOfWeek: 'monday', open: '04:30:00', close: '18:00:00'},
      {dayOfWeek: 'tuesday', open: '04:30:00', close: '18:00:00'},
      {dayOfWeek: 'thursday', open: '04:30:00', close: '18:00:00'},
      {dayOfWeek: 'sunday', open: '04:30:00', close: '18:00:00'},
      {dayOfWeek: 'friday', open: '04:30:00', close: '18:00:00'},
      {dayOfWeek: 'wednesday', open: '04:30:00', close: '18:00:00'},
      {dayOfWeek: 'saturday', open: '04:30:00', close: '18:00:00'}
    ]
    return of(hour);
  }
}

