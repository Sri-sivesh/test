/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ScreensService } from './screens.service';
import { Screens } from './screens.entity';
import { createScreensDto } from './dtos/createScreens.dto';
import { UUID } from 'crypto';
import { updateScreensDto } from './dtos/updateScreens.dto';

@Controller('screens')
export class ScreensController {
  constructor(private readonly ScreensService: ScreensService) {}
  @Post()
  async create(@Body() createScreensDto: createScreensDto): Promise<Screens> {
    return this.ScreensService.createScreens(createScreensDto);
  }
  @Get('get-all-screens')
  async findAll(): Promise<Screens[]> {
    return this.ScreensService.getAllScreens();
  }
  @Get(':screenId')
  async findOne(@Param('screenId') screenId: UUID): Promise<Screens | null> {
    return this.ScreensService.getScreensById(screenId);
  }
  @Patch(':screenId')
  async update(
    @Param('screenId') screenId: UUID,
    @Body() updateScreensDto: updateScreensDto,
  ): Promise<Screens | null> {
    return this.ScreensService.updateScreens(screenId, updateScreensDto);
  }
  @Delete(':screenId')
  async remove(
    @Param('screenId') screenId: UUID,
  ): Promise<{ deleted: boolean }> {
    return this.ScreensService.deleteScreens(screenId);
  }
}
