/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('format')
export class Format {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'})
  fId: UUID;
  @Column()
  fName: string;
}
