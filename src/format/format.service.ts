/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UUID } from "crypto";
import { Format } from "src/format/format.entity";
import { Repository } from "typeorm";
@Injectable()
export class FormatService {
  constructor(
    @InjectRepository(Format)
    private readonly formatRepo: Repository<Format>,
  ) { }

  async createFormat(data: Partial<Format>): Promise<Format> {
    const format = this.formatRepo.create(data);
    return this.formatRepo.save(format);
  }

  async getAllFormat() {
    return this.formatRepo.find();
  }

  async getFormatById(fId: UUID) {
    return this.formatRepo.findOneBy({ fId });
  }

  async updateFormat(fId: UUID, data: Partial<Format>) {
    await this.formatRepo.update(fId, data);
    return this.getFormatById(fId);
  }

  async deleteFormat(fId: UUID) {
    await this.formatRepo.delete(fId);
    return { deleted: true };
  }
}
