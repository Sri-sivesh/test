/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { createFormatDto } from './createFormat.dto';

export class updateFormatDto extends PartialType(createFormatDto) {}
