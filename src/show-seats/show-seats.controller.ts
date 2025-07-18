/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Patch, Delete, Param, Body } from "@nestjs/common";
import { ShowSeatsService } from "./show-seats.service";
import { showSeats } from "./show-seats.entity";
import { createShowSeatsDto } from "./dtos/createShowSeats.dto";
import { UUID } from "crypto";
import { updateShowSeatsDto } from "./dtos/updateShowSeats.dto";

@Controller("show-seats")
export class ShowSeatsController {
    constructor(private readonly ShowSeatsService: ShowSeatsService) { }

    @Post()
    async create(
        @Body() createShowSeatsDto: createShowSeatsDto,
    ): Promise<showSeats> {
        return this.ShowSeatsService.createShowSeats(createShowSeatsDto);
    }

    @Get("get-all-show-seats")
    async findAll(): Promise<showSeats[]> {
        return this.ShowSeatsService.getAllShowSeats();
    }

    @Get(":showSeatsId")
    async findOne(@Param("showSeatsId") showSeatsId: UUID): Promise<showSeats | null> {
        return this.ShowSeatsService.getShowSeatsById(showSeatsId);
    }

    @Patch(":showSeatsId")
    async update(
        @Param("showSeatsId") showSeatsId: UUID,
        @Body() updateShowSeatsDto: updateShowSeatsDto,
    ): Promise<showSeats | null> {
        return this.ShowSeatsService.updateShowSeats(showSeatsId, updateShowSeatsDto);
    }

    @Delete(":showSeatsId")
    async remove(@Param("showSeatsId") showSeatsId: UUID): Promise<{ deleted: boolean }> {
        return this.ShowSeatsService.deleteShowSeats(showSeatsId);
    }
}
