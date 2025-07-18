/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { FormatController } from "./format.controller";
import { FormatService } from "./format.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Format } from "src/format/format.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Format])],
  controllers: [FormatController],
  providers: [FormatService],
  exports: [FormatService],
})
export class FormatModule { }
