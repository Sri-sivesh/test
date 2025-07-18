/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { ShowDetails } from 'src/show-details/show-details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShowDetailsService {
  constructor(
    @InjectRepository(ShowDetails)
    private readonly ShowDetailsRepo: Repository<ShowDetails>,
  ) {}

  async createShowDetails(data: Partial<ShowDetails>): Promise<ShowDetails> {
    const showDetails = this.ShowDetailsRepo.create(data);
    return this.ShowDetailsRepo.save(showDetails);
  }
  async getAllShowDetails() {
    return this.ShowDetailsRepo.find();
  }

  async getShowDetailsById(showId: UUID) {
    return this.ShowDetailsRepo.findOneBy({ showId });
  }

  async updateShowDetails(showId: UUID, data: Partial<ShowDetails>) {
    await this.ShowDetailsRepo.update(showId, data);
    return this.getShowDetailsById(showId);
  }

  async deleteShowDetails(showId: UUID) {
    await this.ShowDetailsRepo.delete(showId);
    return { deleted: true };
  }
}
