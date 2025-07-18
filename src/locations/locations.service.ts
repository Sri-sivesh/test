/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UUID } from "crypto";
import { Location } from "src/locations/location.entity";
import { Repository } from "typeorm";
import { updateLocationsDto } from "./dtos/updateLocations.dto";

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly LocationRepo: Repository<Location>,
  ) { }

  async createLocation(data: Partial<Location>): Promise<Location> {
    const location = this.LocationRepo.create(data);
    return this.LocationRepo.save(location);
  }
  async getAllLocations() {
    return this.LocationRepo.find();
  }
  async getLocationsById(loId: UUID) {
    return this.LocationRepo.findOneBy({ loId });
  }
  async updateLocations(loId: UUID, data: updateLocationsDto) {
    await this.LocationRepo.update(loId, data);
    return this.getLocationsById(loId);
  }
  async deleteLocations(loId: UUID) {
    await this.LocationRepo.delete(loId);
    return { deleted: true };
  }
}
