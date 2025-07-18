/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TheatreController } from './theatre.controller';
import { TheatreService } from './theatre.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theatre } from 'src/theatre/theatre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Theatre])],
  controllers: [TheatreController],
  providers: [TheatreService],
  exports: [TheatreService],
})
export class TheatreModule {}
