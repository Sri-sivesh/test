/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { userProfile } from './user-profile.entity';
import { UUID } from 'crypto';
import { createUserProfileDto } from './dtos/createUserProfile.dto';
import { updateUserProfileDto } from './dtos/updateUserProfile.dto';

@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post()
  async create(
    @Body() createUserProfileDto: createUserProfileDto,
  ): Promise<userProfile> {
    console.log("----------------------", createUserProfileDto);
    return this.userProfileService.createUserProfile(createUserProfileDto);
  }

  @Get('get-all-user-profile')
  async findAll(): Promise<userProfile[]> {
    return this.userProfileService.getAllUserProfile();
  }

  @Get(':uId')
  async findOne(@Param('uId') uId: UUID): Promise<userProfile | null> {
    return this.userProfileService.getUserProfileById(uId);
  }

  @Patch(':uId')
  async update(
    @Param('uId') uId: UUID,
    @Body() UpdateUserProfileDto: updateUserProfileDto,
  ): Promise<userProfile | null> {
    return this.userProfileService.updateUserProfile(uId, UpdateUserProfileDto);
  }

  @Delete(':uId')
  async remove(@Param('uId') uId: UUID): Promise<{ deleted: boolean }> {
    return this.userProfileService.deleteUserProfile(uId);
  }
}
