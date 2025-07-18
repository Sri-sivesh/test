/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class createGenresDto {
  @IsUUID()
  @IsNotEmpty()
  gId: UUID;
  @IsString()
  @IsNotEmpty()
  gName: string;
}
