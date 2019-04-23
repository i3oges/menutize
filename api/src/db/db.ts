import { IMain, IDatabase } from 'pg-promise';
const pgPromise = require('pg-promise');
const auth = require('../auth');
const { user, password, host, port, database } = auth.postgres;
const cn = `postgres://${user}:${password}@${host}:${port}/${database}`;

interface ILocation {
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: number;
}

interface IHours {
  open: string;
  close: string;
  day_of_week: string;
}

interface IMenuItem {
  name: string;
  description: string;
  price: number;
}

export interface IExtensions {
  findLocation(): Promise<ILocation>;
  findHours(): Promise<IHours[]>;
  findMenuItems(): Promise<IMenuItem[]>;
  insertMenuItem(menuItem: IMenuItem): Promise<any>;
  updateLocation(location: ILocation): Promise<any>;
}

const options = {
  extend: (obj: any) => {
    obj.findLocation = () => {
      return obj.one('SELECT * FROM public.location');
    };
    obj.findHours = () => {
      return obj.many('SELECT * FROM public.hours');
    };
    obj.findMenuItems = () => {
      return obj.many('SELECT * FROM public.menu');
    };
    obj.insertMenuItem = (menuItem: IMenuItem) => {
      const query = 'INSERT INTO public.menu values (${name}, ${description}, ${price})';
      obj.one(query, menuItem);
    };
    obj.updateLocation = (location: ILocation) => {
      console.log(location);
      const query = `UPDATE public.location SET (address, address2, city, state, zip) =
        ($(address), $(address2), $(city), $(state), $(zip))`;
      obj.one(query, location);
    };
  }
}

const pgp: IMain = pgPromise(options);

const db = <IDatabase<IExtensions>&IExtensions>pgp(cn);

export default db;
