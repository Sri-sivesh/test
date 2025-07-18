/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Param, Patch, Delete, } from "@nestjs/common";
import { MovieDetailsService } from "./movie-details.service";
import { createMovieDetailsDto } from "./dtos/createMovieDetails.dto";
import { movieDetails } from "./movie-details.entity";
import { UUID } from "crypto";
import { updateMovieDetailsDto } from "./dtos/updateMovieDetails.dto";

@Controller("movie-details")
export class MovieDetailsController {
  constructor(private readonly movieDetailsService: MovieDetailsService) { }
  @Post()
  async create(
    @Body() createMovieDetailsDto: createMovieDetailsDto,
  ): Promise<movieDetails> {
    return this.movieDetailsService.createMovieDetails(createMovieDetailsDto);
  }
  @Get("get-all-movie-details")
  async findAll(): Promise<movieDetails[]> {
    return this.movieDetailsService.getAllMovieDetails();
  }
  @Get(":mId")
  async findOne(@Param("mId") mId: UUID): Promise<movieDetails | null> {
    return this.movieDetailsService.getMovieDetailsById(mId);
  }
  @Patch(":mId")
  async update(
    @Param("mId") mId: UUID,
    @Body() updateMovieDetailsDto: updateMovieDetailsDto,
  ): Promise<movieDetails | null> {
    return this.movieDetailsService.updateMovieDetails(
      mId,
      updateMovieDetailsDto,
    );
  }
  @Delete(":mId")
  async remove(@Param("mId") mId: UUID): Promise<{ deleted: boolean }> {
    return this.movieDetailsService.deleteMovieDetails(mId);
  }
}
