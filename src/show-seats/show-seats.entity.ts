/* eslint-disable prettier/prettier */
import { UUID } from "crypto";
import { Category } from "src/enum/category.enum";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ShowDetails } from "../show-details/show-details.entity";
import { Seats } from "../seats/seats.entity";

@Entity("show-seats")
export class showSeats {
  @PrimaryColumn()
  showSeatsId: UUID;
  @Column()
  showId: UUID;
  @Column()
  seatId: UUID;
  @Column()
  seatCategory: Category;
  @Column()
  seatCost: number;
  @ManyToOne(() => ShowDetails, (sd) => sd.showId)
  @JoinColumn({ name: "showId" })
  sd: ShowDetails;
  @ManyToOne(() => Seats, (seat) => seat.seatId)
  @JoinColumn({ name: "seatId" })
  seat: Seats;
}
