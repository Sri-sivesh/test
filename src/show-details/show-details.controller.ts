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
import { ShowDetailsService } from './show-details.service';
import { ShowDetails } from './show-details.entity';
import { createShowDetailsDto } from './dtos/createShowDetails.dto';
import { UUID } from 'crypto';
import { updateShowDetailsDto } from './dtos/updateShowDetails.dto';

@Controller('show-details')
export class ShowDetailsController {
  constructor(private readonly ShowDetailsService: ShowDetailsService) {}

  @Post()
  async create(
    @Body() createShowDetailsDto: createShowDetailsDto,
  ): Promise<ShowDetails> {
    return this.ShowDetailsService.createShowDetails(createShowDetailsDto);
  }

  @Get('get-all-show-details')
  async findAll(): Promise<ShowDetails[]> {
    return this.ShowDetailsService.getAllShowDetails();
  }

  @Get(':showId')
  async findOne(@Param('showId') showId: UUID): Promise<ShowDetails | null> {
    return this.ShowDetailsService.getShowDetailsById(showId);
  }

  @Patch(':showId')
  async update(
    @Param('showId') showId: UUID,
    @Body() updateShowDetailsDto: updateShowDetailsDto,
  ): Promise<ShowDetails | null> {
    return this.ShowDetailsService.updateShowDetails(
      showId,
      updateShowDetailsDto,
    );
  }

  @Delete(':showId')
  async remove(@Param('showId') showId: UUID): Promise<{ deleted: boolean }> {
    return this.ShowDetailsService.deleteShowDetails(showId);
  }
}
