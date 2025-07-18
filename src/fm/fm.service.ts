/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UUID } from "crypto";
import { FM } from "src/fm/fm.entity";
import { Repository } from "typeorm";

@Injectable()
export class FmService {
  constructor(
    @InjectRepository(FM)
    private readonly fmRepo: Repository<FM>,
  ) {}

  async createFM(data: Partial<FM>): Promise<FM> {
    const fm = this.fmRepo.create(data);
    return this.fmRepo.save(fm);
  }
  async getAllFm() {
    return this.fmRepo.find();
  }
  async getFmById(fmId: UUID) {
    return this.fmRepo.findOneBy({ fmId });
  }
  async updateFm(fmId: UUID, data: Partial<FM>) {
    await this.fmRepo.update(fmId, data);
    return this.getFmById(fmId);
  }
  async deleteFm(fmId: UUID) {
    await this.fmRepo.delete(fmId);
    return { deleted: true };
  }
}
