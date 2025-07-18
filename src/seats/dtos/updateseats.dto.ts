/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { createSeatsDto } from './createseats.dto';

export class updateSeatsDto extends PartialType(createSeatsDto) {}
