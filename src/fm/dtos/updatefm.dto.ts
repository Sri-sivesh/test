/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { createfmDto } from './createfm.dto';

export class updatefmDto extends PartialType(createfmDto) {}
