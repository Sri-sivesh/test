/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';
@Entity('location')
export class Location {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'})
  loId: UUID;
  @Column()
  loName: string;
}
