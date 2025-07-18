/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { SeatsService } from "./seats.service";
import { Seats } from "./seats.entity";
import { createSeatsDto } from "./dtos/createseats.dto";
import { UUID } from "crypto";
import { updateSeatsDto } from "./dtos/updateseats.dto";

@Controller("seats")
export class SeatsController {
    constructor(private readonly SeatsService: SeatsService) { }

    @Post()
    async create(
        @Body() createSeatsDto: createSeatsDto,
    ): Promise<Seats> {
        return this.SeatsService.createSeats(createSeatsDto);
    }

    @Get("get-all-seats")
    async findAll(): Promise<Seats[]> {
        return this.SeatsService.getAllSeats();
    }

    @Get(":seatId")
    async findOne(@Param("seatId") seatId: UUID): Promise<Seats | null> {
        return this.SeatsService.getSeatsById(seatId);
    }

    @Patch(":seatId")
    async update(
        @Param("seatId") seatId: UUID,
        @Body() updateSeatsDto: updateSeatsDto,
    ): Promise<Seats | null> {
        return this.SeatsService.updateSeats(seatId, updateSeatsDto);
    }

    @Delete(":seatId")
    async remove(@Param("seatId") seatId: UUID): Promise<{ deleted: boolean }> {
        return this.SeatsService.deleteSeats(seatId);
    }
}
