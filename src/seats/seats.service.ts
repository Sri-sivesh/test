/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Seats } from 'src/seats/seats.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeatsService {
  constructor(
    @InjectRepository(Seats)
    private readonly SeatsRepo: Repository<Seats>,
  ) {}

  async createSeats(data: Partial<Seats>): Promise<Seats> {
    const seats = this.SeatsRepo.create(data);
    return this.SeatsRepo.save(seats);
  }
  async getAllSeats() {
    return this.SeatsRepo.find();
  }

  async getSeatsById(seatId: UUID) {
    return this.SeatsRepo.findOneBy({ seatId });
  }

  async updateSeats(seatId: UUID, data: Partial<Seats>) {
    await this.SeatsRepo.update(seatId, data);
    return this.getSeatsById(seatId);
  }

  async deleteSeats(seatId: UUID) {
    await this.SeatsRepo.delete(seatId);
    return { deleted: true };
  }
}
