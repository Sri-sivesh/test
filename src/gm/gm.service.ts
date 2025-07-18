/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { GM } from 'src/gm/gm.entity';
import { Repository } from 'typeorm';
@Injectable()
export class GmService {
  constructor(
    @InjectRepository(GM)
    private readonly gmRepo: Repository<GM>,
  ) {}

  async createGM(data: Partial<GM>): Promise<GM> {
    const gm = this.gmRepo.create(data);
    return this.gmRepo.save(gm);
  }
  async getAllGm() {
    return this.gmRepo.find();
  }

  async getGmById(gmId: UUID) {
    return this.gmRepo.findOneBy({ gmId });
  }

  async updateGm(gmId: UUID, data: Partial<GM>) {
    await this.gmRepo.update(gmId, data);
    return this.getGmById(gmId);
  }

  async deleteGm(gmId: UUID) {
    await this.gmRepo.delete(gmId);
    return { deleted: true };
  }
}
