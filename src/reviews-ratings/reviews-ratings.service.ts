/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { ReviewsRatings } from 'src/reviews-ratings/reviews-ratings.entity';
import { Repository } from 'typeorm';
import { updateReviewsRatingsDto } from './dtos/updateReviewsRatings.dto';

@Injectable()
export class ReviewsRatingsService {
  constructor(
    @InjectRepository(ReviewsRatings)
    private readonly reviewsRatingsRepo: Repository<ReviewsRatings>,
  ) {}

  async createReviewsRatings(
    data: Partial<ReviewsRatings>,
  ): Promise<ReviewsRatings> {
    const reviewsRatings = this.reviewsRatingsRepo.create(data);
    return this.reviewsRatingsRepo.save(reviewsRatings);
  }
  async getAllReviewsRatings() {
    return this.reviewsRatingsRepo.find();
  }
  async getReviewsRatingsById(rrId: UUID) {
    return this.reviewsRatingsRepo.findOneBy({ rrId });
  }
  async updateReviewsRatings(rrId: UUID, data: updateReviewsRatingsDto) {
    await this.reviewsRatingsRepo.update(rrId, data);
    return this.getReviewsRatingsById(rrId);
  }
  async deleteReviewsRatings(rrId: UUID) {
    await this.reviewsRatingsRepo.delete(rrId);
    return { deleted: true };
  }
}
