/* eslint-disable prettier/prettier */
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { UUID } from 'crypto';

export class createMovieDetailsDto {
  @IsUUID()
  @IsNotEmpty()
  mId: UUID;

  @IsString()
  @IsOptional()
  mName: string;

  @IsNumber()
  @IsOptional()
  mDuration: number;

  @IsDate()
  @IsOptional()
  mReleaseDate: Date;

  @IsString()
  @IsOptional()
  mDescriptions: string;

  @IsArray()
  @IsOptional()
  mCast: string[];

  @IsArray()
  @IsOptional()
  mCrew: string[];
}
