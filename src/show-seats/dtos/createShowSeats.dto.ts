/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsUUID, Min } from "class-validator";
import { UUID } from "crypto";
import { Category } from "src/enum/category.enum";

export class createShowSeatsDto {
  @IsUUID()
  @IsNotEmpty()
  showSeatsId: UUID;
  @IsUUID()
  @IsNotEmpty()
  showId: UUID;
  @IsUUID()
  @IsNotEmpty()
  seatId: UUID;
  @IsNotEmpty()
  showCategory: Category;
  @IsNumber()
  @Min(50)
  seatCost: number;
}
