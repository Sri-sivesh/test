/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { createUserProfileDto } from './createUserProfile.dto';

export class updateUserProfileDto extends PartialType(createUserProfileDto) {}
