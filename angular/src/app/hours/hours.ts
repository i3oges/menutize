import { FormControl } from '@angular/forms';

export interface Hour {
  open: string;
  close: string;
  dayOfWeek: string;
}

export interface ControlledHour {
  open: FormControl;
  close: FormControl;
  dayOfWeek: string;
}
