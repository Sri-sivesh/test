/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { createMovieDetailsDto } from './createMovieDetails.dto';

export class updateMovieDetailsDto extends PartialType(createMovieDetailsDto) {}
