/* eslint-disable prettier/prettier */
import { UUID } from 'crypto';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ShowDetails } from '../show-details/show-details.entity';
import { userProfile } from 'src/user-profile/user-profile.entity';
import { showSeats } from 'src/show-seats/show-seats.entity';
@Entity('ticket-booking')
export class TicketBooking {
  @PrimaryColumn({type:'uuid',default: ()=>'gen_random_uuid()'})
  tbId: UUID;
  @Column()
  showId: UUID;
  @Column()
  uId: UUID;
  @Column()
  showSeatsId: UUID;
  @Column({ type: 'timestamp' })
  tbDateTime: string;
  @ManyToOne(() => userProfile, (up) => up.uId)
  @JoinColumn({ name: 'uId' })
  up: userProfile;
  @ManyToOne(() => showSeats, (showSeats) => showSeats.showSeatsId)
  @JoinColumn({ name: 'showSeatsId' })
  ticseats: showSeats;
  @ManyToOne(() => ShowDetails, (sd) => sd.showId)
  @JoinColumn({ name: 'showId' })
  sd: ShowDetails;
}
