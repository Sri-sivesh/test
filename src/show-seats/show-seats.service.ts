/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UUID } from "crypto";
import { showSeats } from "src/show-seats/show-seats.entity";
import { Repository } from "typeorm";

@Injectable()
export class ShowSeatsService {
  constructor(
    @InjectRepository(showSeats)
    private readonly showSeatsRepo: Repository<showSeats>,
  ) { }

  async createShowSeats(data: Partial<showSeats>): Promise<showSeats> {
    const showSeats = this.showSeatsRepo.create(data);
    return this.showSeatsRepo.save(showSeats);
  }
  async getAllShowSeats() {
    return this.showSeatsRepo.find();
  }

  async getShowSeatsById(showSeatsId: UUID) {
    return this.showSeatsRepo.findOneBy({ showSeatsId });
  }

  async updateShowSeats(showSeatsId: UUID, data: Partial<showSeats>) {
    await this.showSeatsRepo.update(showSeatsId, data);
    return this.getShowSeatsById(showSeatsId);
  }

  async deleteShowSeats(showSeatsId: UUID) {
    await this.showSeatsRepo.delete(showSeatsId);
    return { deleted: true };
  }
}
