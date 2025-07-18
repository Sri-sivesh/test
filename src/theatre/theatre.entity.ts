/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Location } from '../locations/locations.entity';
@Entity('theatre')
export class Theatre {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'}) 
  theatreId: UUID;
  @Column()
  theatreName: string;
  @Column()
  loId: UUID;
  @ManyToOne(() => Location, (loc) => loc.loId)
  @JoinColumn({ name: 'loId' })
  lo: Location;
}
