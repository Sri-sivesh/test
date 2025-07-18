/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Patch, Delete, Param, Body } from "@nestjs/common";
import { TheatreService } from "./theatre.service";
import { createTheatreDto } from "./dtos/createTheatre.dto";
import { Theatre } from "./theatre.entity";
import { UUID } from "crypto";
import { updateTheatreDto } from "./dtos/updateTheatre.dto";

@Controller("theatre")
export class TheatreController {
    constructor(private readonly TheatreService: TheatreService) { }

    @Post()
    async create(
        @Body() createTheatreDto: createTheatreDto,
    ): Promise<Theatre> {
        return this.TheatreService.createTheatre(createTheatreDto);
    }

    @Get("get-all-theatre")
    async findAll(): Promise<Theatre[]> {
        return this.TheatreService.getAllTheatre();
    }

    @Get(":theatreId")
    async findOne(@Param("theatreId") theatreId: UUID): Promise<Theatre | null> {
        return this.TheatreService.getTheatreById(theatreId);
    }

    @Patch(":theatreId")
    async update(
        @Param("theatreId") theatreId: UUID,
        @Body() updateTheatreDto: updateTheatreDto,
    ): Promise<Theatre | null> {
        return this.TheatreService.updateTheatre(theatreId, updateTheatreDto);
    }

    @Delete(":theatreId")
    async remove(@Param("theatreId") theatreId: UUID): Promise<{ deleted: boolean }> {
        return this.TheatreService.deleteTheatre(theatreId);
    }
}
