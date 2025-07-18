/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { LanguagesService } from "./languages.service";
import { createLanguagesDto } from "./dtos/createLanguages.dto";
import { Languages } from "./languages.entity";
import { UUID } from "crypto";
import { updateLanguagesDto } from "./dtos/updateLanguages.dto";

@Controller("languages")
export class LanguagesController {
  constructor(private readonly LanguagesService: LanguagesService) { }

  @Post()
  async create(
    @Body() createLanguagesDto: createLanguagesDto,
  ): Promise<Languages> {
    return this.LanguagesService.createLanguages(createLanguagesDto);
  }

  @Get("get-all-languages")
  async findAll(): Promise<Languages[]> {
    return this.LanguagesService.getAllLanguages();
  }

  @Get(":lId")
  async findOne(@Param("lId") lId: UUID): Promise<Languages | null> {
    return this.LanguagesService.getLanguagesById(lId);
  }

  @Patch(":lId")
  async update(
    @Param("lId") lId: UUID,
    @Body() updateLanguagesDto: updateLanguagesDto,
  ): Promise<Languages | null> {
    return this.LanguagesService.updateLanguages(lId, updateLanguagesDto);
  }

  @Delete(":lId")
  async remove(@Param("lId") lId: UUID): Promise<{ deleted: boolean }> {
    return this.LanguagesService.deleteLanguages(lId);
  }
}
