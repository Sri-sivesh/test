/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MovieDetailsController } from "./movie-details.controller";
import { MovieDetailsService } from "./movie-details.service";
import { movieDetails } from "src/movie-details/movie-details.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([movieDetails])],
  controllers: [MovieDetailsController],
  providers: [MovieDetailsService],
  exports: [MovieDetailsService],
})
export class MovieDetailsModule { }
