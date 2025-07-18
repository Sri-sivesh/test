/* eslint-disable prettier/prettier */
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { UUID } from "crypto";
import { Gender } from "src/enum/gender.enum";
import { Relationship } from "src/enum/relationship.enum";

export class createUserProfileDto {
  @IsUUID()
  @IsNotEmpty()
  uId: UUID;
  @IsString()
  @IsNotEmpty()
  uFname: string;
  @IsString()
  @IsOptional()
  uLname: string;
  @IsEmail()
  @IsNotEmpty()
  uEmail: string;
  @IsDate()
  @IsNotEmpty()
  uDOB: Date;
  @IsOptional()
  uPhone: bigint;
  @IsOptional()
  uGender: Gender;
  @IsOptional()
  uRelationship: Relationship;
  @IsString()
  @IsOptional()
  uAddress: string;
}
