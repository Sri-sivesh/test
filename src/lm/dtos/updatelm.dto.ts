/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { createlmDto } from './createlm.dto';

export class updatelmDto extends PartialType(createlmDto) {}
