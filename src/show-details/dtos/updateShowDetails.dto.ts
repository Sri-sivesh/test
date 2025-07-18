/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { createShowDetailsDto } from "./createShowDetails.dto";

export class updateShowDetailsDto extends PartialType(createShowDetailsDto) { }
