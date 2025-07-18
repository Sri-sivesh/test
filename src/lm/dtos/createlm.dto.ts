/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class createlmDto {
  @IsUUID()
  @IsNotEmpty()
  lmId: UUID;

  @IsUUID()
  @IsNotEmpty()
  lId: UUID;

  @IsUUID()
  @IsNotEmpty()
  mId: UUID;
}
