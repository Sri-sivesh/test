/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { createLanguagesDto } from "./createLanguages.dto";

export class updateLanguagesDto extends PartialType(createLanguagesDto) { }
