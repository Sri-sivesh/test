/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('movie-details')
export class movieDetails {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'})
  mId: UUID;
  @Column()
  mName: string;
  @Column()
  mDuration: number;
  @Column({ type: 'date' })
  mReleaseDate: Date;
  @Column()
  mDescriptions: string;
  @Column('text', { array: true })
  mCast: string[];
  @Column('text', { array: true })
  mCrew: string[];
}
