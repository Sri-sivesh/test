/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import { Screens } from 'src/screens/screens.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('seats')
export class Seats {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'})
  seatId: UUID;
  @Column()
  screenId: UUID;
  @ManyToOne(() => Screens, (scr) => scr.screenId)
  @JoinColumn({ name: 'screenId' })
  scr: Screens;
}
