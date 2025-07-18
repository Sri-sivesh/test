/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { LanguagesController } from "./languages.controller";
import { LanguagesService } from "./languages.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Languages } from "src/languages/languages.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Languages])],
  controllers: [LanguagesController],
  providers: [LanguagesService],
  exports: [LanguagesService],
})
export class LanguagesModule { }
