/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ShowSeatsController } from './show-seats.controller';
import { ShowSeatsService } from './show-seats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { showSeats } from 'src/show-seats/show-seats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([showSeats])],
  controllers: [ShowSeatsController],
  providers: [ShowSeatsService],
  exports: [ShowSeatsService],
})
export class ShowSeatsModule {}
