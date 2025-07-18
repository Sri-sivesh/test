/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class createScreensDto {
  @IsUUID()
  @IsNotEmpty()
  screenId: UUID;

  @IsUUID()
  @IsNotEmpty()
  theatreId: UUID;
}
