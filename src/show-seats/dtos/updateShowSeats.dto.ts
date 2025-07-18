/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { createShowSeatsDto } from "./createShowSeats.dto";

export class updateShowSeatsDto extends PartialType(createShowSeatsDto) { }
