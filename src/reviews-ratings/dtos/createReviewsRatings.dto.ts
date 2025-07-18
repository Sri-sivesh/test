/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { UUID } from 'crypto';

export class createReviewsRatingsDto {
  @IsUUID()
  @IsNotEmpty()
  rrId: UUID;

  @IsUUID()
  @IsNotEmpty()
  mId: UUID;

  @IsUUID()
  @IsNotEmpty()
  uId: UUID;

  @IsNumber()
  @IsOptional()
  rating: number;

  @IsString()
  @IsOptional()
  review: string;
}
