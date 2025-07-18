/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsTimeZone, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class createShowDetailsDto {
  @IsUUID()
  @IsNotEmpty()
  showId: UUID;
  @IsUUID()
  @IsNotEmpty()
  mId: UUID;
  @IsUUID()
  @IsNotEmpty()
  screenId: UUID;
  @IsUUID()
  @IsNotEmpty()
  lId: UUID;
  @IsUUID()
  @IsNotEmpty()
  fId: UUID;
  @IsTimeZone()
  @IsNotEmpty()
  showDateTime: Date;
}
