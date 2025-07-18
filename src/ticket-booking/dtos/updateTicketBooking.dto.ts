/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { createTicketBookingDto } from "./createTicketBooking.dto";

export class updateTicketBookingDto extends PartialType(createTicketBookingDto) { }
