import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Hours {
  @Column('numeric')
  open: number;

  @Column('numeric')
  close: number;

  @PrimaryColumn('text')
  dayOfWeek: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
}
