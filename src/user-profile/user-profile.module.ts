/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserProfileController } from "./user-profile.controller";
import { UserProfileService } from "./user-profile.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userProfile } from "src/user-profile/user-profile.entity";

@Module({
  imports: [TypeOrmModule.forFeature([userProfile])],
  controllers: [UserProfileController],
  providers: [UserProfileService],
  exports: [UserProfileService],
})
export class UserProfileModule { }
