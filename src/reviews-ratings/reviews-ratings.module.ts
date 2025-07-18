/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsRatings } from 'src/reviews-ratings/reviews-ratings.entity';
import { ReviewsRatingsController } from './reviews-ratings.controller';
import { ReviewsRatingsService } from './reviews-ratings.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewsRatings])],
  controllers: [ReviewsRatingsController],
  providers: [ReviewsRatingsService],
  exports: [ReviewsRatingsService],
})
export class ReviewsRatingsModule {}
