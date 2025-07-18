/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UUID } from "crypto";
import { userProfile } from "src/user-profile/user-profile.entity";
import { Repository } from "typeorm";
import { createUserProfileDto } from "./dtos/createUserProfile.dto";

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(userProfile)
    private readonly UserProfileRepo: Repository<userProfile>,
  ) { }

  async createUserProfile(data: userProfile): Promise<createUserProfileDto> {
    const userProfile = this.UserProfileRepo.create(data);
    return this.UserProfileRepo.save(userProfile);
  }

  async getAllUserProfile() {
    return this.UserProfileRepo.find();
  }

  async getUserProfileById(uId: UUID) {
    return this.UserProfileRepo.findOneBy({ uId });
  }

  async updateUserProfile(uId: UUID, data: Partial<userProfile>) {
    await this.UserProfileRepo.update(uId, data);
    return this.getUserProfileById(uId);
  }

  async deleteUserProfile(uId: UUID) {
    await this.UserProfileRepo.delete(uId);
    return { deleted: true };
  }
}
