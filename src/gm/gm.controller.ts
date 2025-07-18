/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { GmService } from "./gm.service";
import { creategmDto } from "./dtos/creategm.dto";
import { GM } from "./gm.entity";
import { UUID } from "crypto";
import { updategmDto } from "./dtos/updategm.dto";

@Controller("gm")
export class GmController {
  constructor(private readonly GmService: GmService) {}

  @Post()
  async create(@Body() creategmDto: creategmDto): Promise<GM> {
    return this.GmService.createGM(creategmDto);
  }

  @Get("get-all-gm")
  async findAll(): Promise<GM[]> {
    return this.GmService.getAllGm();
  }

  @Get(":gmId")
  async findOne(@Param("gmId") gmId: UUID): Promise<GM | null> {
    return this.GmService.getGmById(gmId);
  }

  @Patch(":gmId")
  async update(
    @Param("gmId") gmId: UUID,
    @Body() updategmDto: updategmDto,
  ): Promise<GM | null> {
    return this.GmService.updateGm(gmId, updategmDto);
  }

  @Delete(":gmId")
  async remove(@Param("gmId") gmId: UUID): Promise<{ deleted: boolean }> {
    return this.GmService.deleteGm(gmId);
  }
}
