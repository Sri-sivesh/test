/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UUID } from "crypto";
import { Theatre } from "src/theatre/theatre.entity";
import { Repository } from "typeorm";

@Injectable()
export class TheatreService {
  constructor(
    @InjectRepository(Theatre)
    private readonly TheatreRepo: Repository<Theatre>,
  ) { }

  async createTheatre(data: Partial<Theatre>): Promise<Theatre> {
    const theatre = this.TheatreRepo.create(data);
    return this.TheatreRepo.save(theatre);
  }
  async getAllTheatre() {
    return this.TheatreRepo.find();
  }

  async getTheatreById(theatreId: UUID) {
    return this.TheatreRepo.findOneBy({ theatreId });
  }

  async updateTheatre(theatreId: UUID, data: Partial<Theatre>) {
    await this.TheatreRepo.update(theatreId, data);
    return this.getTheatreById(theatreId);
  }

  async deleteTheatre(theatreId: UUID) {
    await this.TheatreRepo.delete(theatreId);
    return { deleted: true };
  }
}
