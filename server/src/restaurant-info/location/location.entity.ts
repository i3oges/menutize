import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Location {
  @PrimaryColumn('text')
  address: string;

  @Column('text')
  address2: string;

  @Column('text')
  city: string;

  @Column('text')
  state: string;

  @Column('numeric')
  zip: number;
}
