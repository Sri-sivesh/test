/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Languages } from 'src/languages/languages.entity';
import { Repository } from 'typeorm';
@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(Languages)
    private readonly languagesRepo: Repository<Languages>,
  ) {}

  async createLanguages(data: Partial<Languages>): Promise<Languages> {
    const languages = this.languagesRepo.create(data);
    return this.languagesRepo.save(languages);
  }

  async getAllLanguages() {
    return this.languagesRepo.find();
  }

  async getLanguagesById(lId: UUID) {
    return this.languagesRepo.findOneBy({ lId });
  }

  async updateLanguages(lId: UUID, data: Partial<Languages>) {
    await this.languagesRepo.update(lId, data);
    return this.getLanguagesById(lId);
  }

  async deleteLanguages(lId: UUID) {
    await this.languagesRepo.delete(lId);
    return { deleted: true };
  }
}
