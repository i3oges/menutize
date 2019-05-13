import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Hours {
  @Column({ type: 'time', nullable: true })
  open: string;

  @Column({ type: 'time', nullable: true })
  close: string;

  @PrimaryColumn('text')
  dayOfWeek: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
}
