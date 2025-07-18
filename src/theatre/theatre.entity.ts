/* eslint-disable prettier/prettier */
import { UUID } from "crypto";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Location } from "../locations/location.entity";
@Entity("theatre")
export class Theatre {
  @PrimaryColumn()
  theatreId: UUID;
  @Column()
  theatreName: string;
  @Column()
  loId: UUID;
  @ManyToOne(() => Location, (loc) => loc.loId)
  @JoinColumn({ name: "loId" })
  lo: Location;
}
