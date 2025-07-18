/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { movieDetails } from '../movie-details/movie-details.entity';
import { Languages } from '../languages/languages.entity';
@Entity('l-m')
export class LM {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'}) 
  lmId: UUID;
  @Column()
  lId: UUID;
  @Column()
  mId: UUID;
  @ManyToOne(() => Languages, (la) => la.lId)
  @JoinColumn({ name: 'lId' })
  la: Languages;
  @ManyToOne(() => movieDetails, (movdet) => movdet.mId)
  @JoinColumn({ name: 'mId' })
  movdet: movieDetails;
}
