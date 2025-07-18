/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Patch, Delete, Param, Body } from "@nestjs/common";
import { TicketBookingService } from "./ticket-booking.service";
import { TicketBooking } from "./ticket-booking.entity";
import { UUID } from "crypto";
import { createTicketBookingDto } from "./dtos/createTicketBooking.dto";
import { updateTicketBookingDto } from "./dtos/updateTicketBooking.dto";

@Controller("ticket-booking")
export class TicketBookingController {
    constructor(private readonly TicketBookingService: TicketBookingService) { }

    @Post()
    async create(
        @Body() createTicketBookingDto: createTicketBookingDto,
    ): Promise<TicketBooking> {
        return this.TicketBookingService.createTicketBooking(createTicketBookingDto);
    }

    @Get("get-all-ticket-booking")
    async findAll(): Promise<TicketBooking[]> {
        return this.TicketBookingService.getAllTicketBooking();
    }

    @Get(":tbId")
    async findOne(@Param("tbId") tbId: UUID): Promise<TicketBooking | null> {
        return this.TicketBookingService.getTicketBookingById(tbId);
    }

    @Patch(":tbId")
    async update(
        @Param("tbId") tbId: UUID,
        @Body() updateTicketBookingDto: updateTicketBookingDto,
    ): Promise<TicketBooking | null> {
        return this.TicketBookingService.updateTicketBooking(tbId, updateTicketBookingDto);
    }

    @Delete(":tbId")
    async remove(@Param("tbId") tbId: UUID): Promise<{ deleted: boolean }> {
        return this.TicketBookingService.deleteTicketBooking(tbId);
    }
}
