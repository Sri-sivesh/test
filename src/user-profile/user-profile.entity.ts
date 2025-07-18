/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import { Gender } from 'src/enum/gender.enum';
import { Relationship } from 'src/enum/relationship.enum';
import { Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('user-profile')
export class userProfile {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'})
  uId: UUID;
  @Column()
  uFname: string;
  @Column()
  uLname: string;
  @Column()
  uEmail: string;
  @Column({ type: 'bigint' })
  uPhone: bigint;
  @Column()
  uDOB: Date;
  @Column({ type: 'enum', enum: Gender })
  uGender: Gender;
  @Column({ type: 'enum', enum: Relationship })
  uRelationship: Relationship;
  @Column()
  uAddress: string;
}
