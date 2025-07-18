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
import { FormatService } from './format.service';
import { createFormatDto } from './dtos/createFormat.dto';
import { Format } from './format.entity';
import { updateFormatDto } from './dtos/updateFormat.dto';
@Controller('format')
export class FormatController {
  constructor(private readonly FormatService: FormatService) {}

  @Post()
  async create(@Body() createFormatDto: createFormatDto): Promise<Format> {
    return this.FormatService.createFormat(createFormatDto);
  }

  @Get('get-all-format')
  async findAll(): Promise<Format[]> {
    return this.FormatService.getAllFormat();
  }

  @Get(':fId')
  async findOne(@Param('fId') fId: UUID): Promise<Format | null> {
    return this.FormatService.getFormatById(fId);
  }

  @Patch(':fId')
  async update(
    @Param('fmId') fId: UUID,
    @Body() updateFormatDto: updateFormatDto,
  ): Promise<Format | null> {
    return this.FormatService.updateFormat(fId, updateFormatDto);
  }

  @Delete(':fId')
  async remove(@Param('fId') fId: UUID): Promise<{ deleted: boolean }> {
    return this.FormatService.deleteFormat(fId);
  }
}
