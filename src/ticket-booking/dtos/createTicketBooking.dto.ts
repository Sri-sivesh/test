/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsTimeZone, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class createTicketBookingDto {
  @IsUUID()
  @IsNotEmpty()
  tbId: UUID;
  @IsUUID()
  @IsNotEmpty()
  showId: UUID;
  @IsUUID()
  @IsNotEmpty()
  uId: UUID;
  @IsUUID()
  @IsNotEmpty()
  TicSeatsId: UUID;
  @IsTimeZone()
  @IsNotEmpty()
  tbDateTime: string;
}
