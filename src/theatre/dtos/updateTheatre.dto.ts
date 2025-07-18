/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { createTheatreDto } from './createTheatre.dto';

export class updateTheatreDto extends PartialType(createTheatreDto) {}
