/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ScreensController } from "./screens.controller";
import { ScreensService } from "./screens.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Screens } from "./screens.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Screens])],
  controllers: [ScreensController],
  providers: [ScreensService],
  exports: [ScreensService],
})
export class ScreensModule { }
