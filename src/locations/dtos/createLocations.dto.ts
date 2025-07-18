/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class createLocationsDto {
  @IsUUID()
  @IsNotEmpty()
  loId: UUID;

  @IsUUID()
  @IsNotEmpty()
  lId: UUID;

  @IsOptional()
  @IsString()
  loName: string;
}
