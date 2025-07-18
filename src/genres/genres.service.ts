/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Genres } from 'src/genres/genres.entity';
import { Repository } from 'typeorm';
@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genres)
    private readonly genresRepo: Repository<Genres>,
  ) {}

  async createGenres(data: Partial<Genres>): Promise<Genres> {
    const genres = this.genresRepo.create(data);
    return this.genresRepo.save(genres);
  }

  async getAllGenres() {
    return this.genresRepo.find();
  }

  async getGenresById(gId: UUID) {
    return this.genresRepo.findOneBy({ gId });
  }

  async updateGenres(gId: UUID, data: Partial<Genres>) {
    await this.genresRepo.update(gId, data);
    return this.getGenresById(gId);
  }

  async deleteGenres(gId: UUID) {
    await this.genresRepo.delete(gId);
    return { deleted: true };
  }
}
