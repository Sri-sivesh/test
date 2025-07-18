/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class createSeatsDto {
  @IsUUID()
  @IsNotEmpty()
  seatId: UUID;
  @IsUUID()
  @IsNotEmpty()
  screenId: UUID;
}
