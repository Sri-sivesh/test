/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { LocationsService } from "./locations.service";
import { createLocationsDto } from "./dtos/createLocations.dto";
import { Location } from "./location.entity";
import { UUID } from "crypto";
import { updateLocationsDto } from "./dtos/updateLocations.dto";

@Controller("locations")
export class LocationsController {
    constructor(private readonly LocationsService: LocationsService) { }
    @Post()
    async create(
        @Body() createLocationsDto: createLocationsDto,
    ): Promise<Location> {
        return this.LocationsService.createLocation(createLocationsDto);
    }
    @Get("get-all-locations")
    async findAll(): Promise<Location[]> {
        return this.LocationsService.getAllLocations();
    }
    @Get(":loId")
    async findOne(@Param("loId") loId: UUID): Promise<Location | null> {
        return this.LocationsService.getLocationsById(loId);
    }
    @Patch(":loId")
    async update(
        @Param("loId") loId: UUID,
        @Body() updateLocationsDto: updateLocationsDto,
    ): Promise<Location | null> {
        return this.LocationsService.updateLocations(
            loId,
            updateLocationsDto,
        );
    }
    @Delete(":loId")
    async remove(@Param("loId") loId: UUID): Promise<{ deleted: boolean }> {
        return this.LocationsService.deleteLocations(loId);
    }
}
