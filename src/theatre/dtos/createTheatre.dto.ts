/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class createTheatreDto {
  @IsUUID()
  @IsNotEmpty()
  theatreId: UUID;
  @IsString()
  theatreName: string;
  @IsUUID()
  @IsNotEmpty()
  loId: UUID;
}
