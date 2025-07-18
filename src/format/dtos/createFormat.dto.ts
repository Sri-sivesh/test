/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class createFormatDto {
  @IsUUID()
  @IsNotEmpty()
  fId: UUID;
  @IsString()
  @IsNotEmpty()
  fName: string;
}
