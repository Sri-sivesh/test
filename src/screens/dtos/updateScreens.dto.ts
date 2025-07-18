/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { createScreensDto } from "./createScreens.dto";

export class updateScreensDto extends PartialType(createScreensDto) { }
