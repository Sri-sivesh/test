/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Theatre } from 'src/theatre/theatre.entity';
@Entity('screens')
export class Screens {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'})
  screenId: UUID;
  @Column()
  theatreId: UUID;
  @ManyToOne(() => Theatre, (thea) => thea.theatreId)
  @JoinColumn({ name: 'theatreId' })
  thea: Theatre;
}
