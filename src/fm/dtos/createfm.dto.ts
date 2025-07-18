/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class createfmDto {
  @IsUUID()
  @IsNotEmpty()
  fmId: UUID;

  @IsUUID()
  @IsNotEmpty()
  fId: UUID;

  @IsUUID()
  @IsNotEmpty()
  mId: UUID;
}
