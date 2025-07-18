/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { movieDetails } from "src/movie-details/movie-details.entity";
import { Repository } from "typeorm";
import { createMovieDetailsDto } from "./dtos/createMovieDetails.dto";
import { UUID } from "crypto";
import { updateMovieDetailsDto } from "./dtos/updateMovieDetails.dto";

@Injectable()
export class MovieDetailsService {
  constructor(
    @InjectRepository(movieDetails)
    private readonly MovieDetailsRepo: Repository<movieDetails>,
  ) {}

  async createMovieDetails(data: movieDetails): Promise<createMovieDetailsDto> {
    const MovieDetails = this.MovieDetailsRepo.create(data);
    return this.MovieDetailsRepo.save(MovieDetails);
  }
  async getAllMovieDetails() {
    return this.MovieDetailsRepo.find();
  }
  async getMovieDetailsById(mId: UUID) {
    return this.MovieDetailsRepo.findOneBy({ mId });
  }
  async updateMovieDetails(mId: UUID, data: updateMovieDetailsDto) {
    await this.MovieDetailsRepo.update(mId, data);
    return this.getMovieDetailsById(mId);
  }
  async deleteMovieDetails(mId: UUID) {
    await this.MovieDetailsRepo.delete(mId);
    return { deleted: true };
  }
}
