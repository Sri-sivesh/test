/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Screens } from "./screens.entity";
import { UUID } from "crypto";
import { updateScreensDto } from "./dtos/updateScreens.dto";

@Injectable()
export class ScreensService {
  constructor(
    @InjectRepository(Screens)
    private readonly ScreensRepo: Repository<Screens>,
  ) { }

  async createScreens(data: Partial<Screens>): Promise<Screens> {
    const screens = this.ScreensRepo.create(data);
    return this.ScreensRepo.save(screens);
  }
  async getAllScreens() {
    return this.ScreensRepo.find();
  }
  async getScreensById(screenId: UUID) {
    return this.ScreensRepo.findOneBy({ screenId });
  }
  async updateScreens(screenId: UUID, data: updateScreensDto) {
    await this.ScreensRepo.update(screenId, data);
    return this.getScreensById(screenId);
  }
  async deleteScreens(screenId: UUID) {
    await this.ScreensRepo.delete(screenId);
    return { deleted: true };
  }
}
