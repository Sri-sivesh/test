/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Patch, Delete, Param, Body } from "@nestjs/common";
import { UUID } from "crypto";
import { GenresService } from "./genres.service";
import { createGenresDto } from "./dtos/createGenres.dto";
import { Genres } from "./genres.entity";
import { updateGenresDto } from "./dtos/updateGenres.dto";

@Controller("genres")
export class GenresController {
  constructor(private readonly GenresService: GenresService) { }

  @Post()
  async create(@Body() createGenresDto: createGenresDto): Promise<Genres> {
    return this.GenresService.createGenres(createGenresDto);
  }

  @Get("get-all-genres")
  async findAll(): Promise<Genres[]> {
    return this.GenresService.getAllGenres();
  }

  @Get(":gId")
  async findOne(@Param("gId") gId: UUID): Promise<Genres | null> {
    return this.GenresService.getGenresById(gId);
  }

  @Patch(":gId")
  async update(
    @Param("gId") gId: UUID,
    @Body() updateGenresDto: updateGenresDto,
  ): Promise<Genres | null> {
    return this.GenresService.updateGenres(gId, updateGenresDto);
  }

  @Delete(":gId")
  async remove(@Param("gId") gId: UUID): Promise<{ deleted: boolean }> {
    return this.GenresService.deleteGenres(gId);
  }
}