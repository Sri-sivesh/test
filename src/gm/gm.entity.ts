/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Genres } from '../genres/genres.entity';
import { movieDetails } from '../movie-details/movie-details.entity';
@Entity('g-m')
export class GM {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'})
  gmId: UUID;
  @Column()
  gId: UUID;
  @Column()
  mId: UUID;
  @ManyToOne(() => Genres, (ge) => ge.gId)
  @JoinColumn({ name: 'gId' })
  ge: Genres;
  @ManyToOne(() => movieDetails, (movdet) => movdet.mId)
  @JoinColumn({ name: 'mId' })
  movdet: movieDetails;
}
