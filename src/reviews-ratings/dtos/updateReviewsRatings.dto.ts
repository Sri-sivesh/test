/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { createReviewsRatingsDto } from './createReviewsRatings.dto';

export class updateReviewsRatingsDto extends PartialType(
  createReviewsRatingsDto,
) {}
