/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UUID } from 'crypto';
import { FmService } from './fm.service';
import { createfmDto } from './dtos/createfm.dto';
import { FM } from './fm.entity';
import { updatefmDto } from './dtos/updatefm.dto';

@Controller('fm')
export class FmController {
  constructor(private readonly FmService: FmService) {}

  @Post()
  async create(@Body() createfmDto: createfmDto): Promise<FM> {
    return this.FmService.createFM(createfmDto);
  }

  @Get('get-all-fm')
  async findAll(): Promise<FM[]> {
    return this.FmService.getAllFm();
  }

  @Get(':fmId')
  async findOne(@Param('fmId') fmId: UUID): Promise<FM | null> {
    return this.FmService.getFmById(fmId);
  }

  @Patch(':fmId')
  async update(
    @Param('fmId') fmId: UUID,
    @Body() updatefmDto: updatefmDto,
  ): Promise<FM | null> {
    return this.FmService.updateFm(fmId, updatefmDto);
  }

  @Delete(':fmId')
  async remove(@Param('fmId') fmId: UUID): Promise<{ deleted: boolean }> {
    return this.FmService.deleteFm(fmId);
  }
}
