/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShowDetails } from "src/show-details/show-details.entity";
import { ShowDetailsController } from "./show-details.controller";
import { ShowDetailsService } from "./show-details.service";

@Module({
  imports: [TypeOrmModule.forFeature([ShowDetails])],
  controllers: [ShowDetailsController],
  providers: [ShowDetailsService],
  exports: [ShowDetailsService],
})
export class ShowsDetailsModule { }
