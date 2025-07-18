/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { LM } from 'src/lm/lm.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LmService {
  constructor(
    @InjectRepository(LM)
    private readonly LMRepo: Repository<LM>,
  ) {}

  async createLM(data: Partial<LM>): Promise<LM> {
    const lm = this.LMRepo.create(data);
    return this.LMRepo.save(lm);
  }
  async getAllLm() {
    return this.LMRepo.find();
  }

  async getLmById(lmId: UUID) {
    return this.LMRepo.findOneBy({ lmId });
  }

  async updateLm(lmId: UUID, data: Partial<LM>) {
    await this.LMRepo.update(lmId, data);
    return this.getLmById(lmId);
  }

  async deleteLm(lmId: UUID) {
    await this.LMRepo.delete(lmId);
    return { deleted: true };
  }
}
