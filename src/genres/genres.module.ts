/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genres } from 'src/genres/genres.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genres])],
  controllers: [GenresController],
  providers: [GenresService],
  exports: [GenresService],
})
export class GenresModule {}
