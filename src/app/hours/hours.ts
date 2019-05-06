import { FormControl } from '@angular/forms';

export interface OpenClose {
    open: FormControl;
    close: FormControl;
}

export interface H {
  monday: OpenClose;
  tuesday: OpenClose;
  wednesday: OpenClose;
  thursday: OpenClose;
  friday: OpenClose;
  saturday: OpenClose;
  sunday: OpenClose;
}

export class Hours {
  monday: OpenClose;
  tuesday: OpenClose;
  wednesday: OpenClose;
  thursday: OpenClose;
  friday: OpenClose;
  saturday: OpenClose;
  sunday: OpenClose;
  constructor() {
    this.monday = {
      open: new FormControl(''),
      close: new FormControl('')
    };
    this.tuesday = {
      open: new FormControl(''),
      close: new FormControl('')
    };
    this.wednesday = {
      open: new FormControl(''),
      close: new FormControl('')
    };
    this.thursday = {
      open: new FormControl(''),
      close: new FormControl('')
    };
    this.friday = {
      open: new FormControl(''),
      close: new FormControl('')
    };
    this.saturday = {
      open: new FormControl(''),
      close: new FormControl('')
    };
    this.sunday = {
      open: new FormControl(''),
      close: new FormControl('')
    };
  }
}
