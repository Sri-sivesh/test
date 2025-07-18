/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { LmController } from "./lm.controller";
import { LmService } from "./lm.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LM } from "src/lm/lm.entity";

@Module({
  imports: [TypeOrmModule.forFeature([LM])],
  controllers: [LmController],
  providers: [LmService],
  exports: [LmService],
})
export class LmModule { }
