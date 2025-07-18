/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SeatsController } from "./seats.controller";
import { SeatsService } from "./seats.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Seats } from "src/seats/seats.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Seats])],
  controllers: [SeatsController],
  providers: [SeatsService],
  exports: [SeatsService],
})
export class SeatsModule { }
