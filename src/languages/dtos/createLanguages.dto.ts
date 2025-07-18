/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class createLanguagesDto {
  @IsUUID()
  @IsNotEmpty()
  lId: UUID;
  @IsUUID()
  @IsNotEmpty()
  lName: string;
}
