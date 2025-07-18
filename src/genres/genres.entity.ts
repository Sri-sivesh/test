/* eslint-disable prettier/prettier */
import { UUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity("genres")
export class Genres {
  @PrimaryColumn()
  gId: UUID;
  @Column()
  gName: string;
}
