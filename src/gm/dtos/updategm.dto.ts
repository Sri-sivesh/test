/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { creategmDto } from './creategm.dto';

export class updategmDto extends PartialType(creategmDto) {}
