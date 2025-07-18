/* eslint-disable prettier/prettier */
import { UUID } from "crypto";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Genres } from "../genres/genres.entity";
import { movieDetails } from "../movie-details/movie-details.entity";
@Entity("g-m")
export class GM {
  @PrimaryColumn()
  gmId: UUID;
  @Column()
  gId: UUID;
  @Column()
  mId: UUID;
  @OneToMany(() => GM, (gm) => gm.gmId)
  gm: GM[];
  @ManyToOne(() => Genres, (ge) => ge.gId)
  @JoinColumn({ name: "gId" })
  ge: Genres;
  @ManyToOne(() => movieDetails, (movdet) => movdet.mId)
  @JoinColumn({ name: "mId" })
  movdet: movieDetails;
}
