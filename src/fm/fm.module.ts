/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { FmController } from "./fm.controller";
import { FmService } from "./fm.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FM } from "src/fm/fm.entity";

@Module({
  imports: [TypeOrmModule.forFeature([FM])],
  controllers: [FmController],
  providers: [FmService],
  exports: [FmService],
})
export class FmModule { }
