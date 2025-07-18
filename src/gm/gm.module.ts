/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GmController } from './gm.controller';
import { GmService } from './gm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GM } from 'src/gm/gm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GM])],
  controllers: [GmController],
  providers: [GmService],
  exports: [GmService],
})
export class GmModule {}
