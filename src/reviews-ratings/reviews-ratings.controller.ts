/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { createReviewsRatingsDto } from './dtos/createReviewsRatings.dto';
import { ReviewsRatingsService } from './reviews-ratings.service';
import { ReviewsRatings } from './reviews-ratings.entity';
import { UUID } from 'crypto';
import { updateReviewsRatingsDto } from './dtos/updateReviewsRatings.dto';

@Controller('reviews-ratings')
export class ReviewsRatingsController {
  constructor(private readonly ReviewsRatingsService: ReviewsRatingsService) {}
  @Post()
  async create(
    @Body() createReviewsRatingsDto: createReviewsRatingsDto,
  ): Promise<ReviewsRatings> {
    return this.ReviewsRatingsService.createReviewsRatings(
      createReviewsRatingsDto,
    );
  }
  @Get('get-all-reviews-ratings')
  async findAll(): Promise<ReviewsRatings[]> {
    return this.ReviewsRatingsService.getAllReviewsRatings();
  }
  @Get(':rrId')
  async findOne(@Param('rrId') rrId: UUID): Promise<ReviewsRatings | null> {
    return this.ReviewsRatingsService.getReviewsRatingsById(rrId);
  }
  @Patch(':rrId')
  async update(
    @Param('rrId') rrId: UUID,
    @Body() updateReviewsRatingsDto: updateReviewsRatingsDto,
  ): Promise<ReviewsRatings | null> {
    return this.ReviewsRatingsService.updateReviewsRatings(
      rrId,
      updateReviewsRatingsDto,
    );
  }
  @Delete(':rrId')
  async remove(@Param('rrId') rrId: UUID): Promise<{ deleted: boolean }> {
    return this.ReviewsRatingsService.deleteReviewsRatings(rrId);
  }
}
