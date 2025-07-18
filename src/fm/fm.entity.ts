/* eslint-disable prettier/prettier */
import { UUID } from "crypto";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Format } from "../format/format.entity";
import { movieDetails } from "../movie-details/movie-details.entity";
@Entity("f-m")
export class FM {
  @PrimaryColumn()
  fmId: UUID;
  @ManyToOne(() => Format, (form) => form.fId)
  @JoinColumn({ name: "fId" })
  format: Format;
  @ManyToOne(() => movieDetails, (movdet) => movdet.mId)
  @JoinColumn({ name: "mId" })
  movdet: movieDetails;
}
