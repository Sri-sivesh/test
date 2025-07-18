/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class creategmDto {
  @IsUUID()
  @IsNotEmpty()
  gmId: UUID;

  @IsUUID()
  @IsNotEmpty()
  gId: UUID;

  @IsUUID()
  @IsNotEmpty()
  mId: UUID;
}
