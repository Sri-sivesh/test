/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { LmService } from './lm.service';
import { createlmDto } from './dtos/createlm.dto';
import { LM } from './lm.entity';
import { UUID } from 'crypto';
import { updatelmDto } from './dtos/updatelm.dto';

@Controller('lm')
export class LmController {
  constructor(private readonly LmService: LmService) {}

  @Post()
  async create(@Body() createlmDto: createlmDto): Promise<LM> {
    return this.LmService.createLM(createlmDto);
  }

  @Get('get-all-lm')
  async findAll(): Promise<LM[]> {
    return this.LmService.getAllLm();
  }

  @Get(':lmId')
  async findOne(@Param('lmId') lmId: UUID): Promise<LM | null> {
    return this.LmService.getLmById(lmId);
  }

  @Patch(':lmId')
  async update(
    @Param('lmId') lmId: UUID,
    @Body() updatelmDto: updatelmDto,
  ): Promise<LM | null> {
    return this.LmService.updateLm(lmId, updatelmDto);
  }

  @Delete(':lmId')
  async remove(@Param('lmId') lmId: UUID): Promise<{ deleted: boolean }> {
    return this.LmService.deleteLm(lmId);
  }
}
