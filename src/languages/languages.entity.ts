/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('languages')
export class Languages {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'}) 
  lId: UUID;
  @Column()
  lName: string;
}
