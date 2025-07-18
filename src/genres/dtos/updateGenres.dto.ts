/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { createGenresDto } from './createGenres.dto';

export class updateGenresDto extends PartialType(createGenresDto) {}
