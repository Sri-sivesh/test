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
import { movieDetails } from "../movie-details/movie-details.entity";
import { Languages } from "../languages/languages.entity";
import { Format } from "../format/format.entity";
import { Screens } from "src/screens/screens.entity";
@Entity("show-details")
export class ShowDetails {
  @PrimaryColumn()
  showId: UUID;
  @Column()
  mId: UUID;
  @Column()
  screenId: UUID;
  @Column()
  lId: UUID;
  @Column()
  fId: UUID;
  @Column({ type: "timestamptz" })
  showDateTime: Date;
  @OneToMany(() => ShowDetails, (sd) => sd.showId)
  sd: ShowDetails[];
  @ManyToOne(() => movieDetails, (movdet) => movdet.mId)
  @JoinColumn({ name: "mId" })
  movdet: movieDetails;
  @ManyToOne(() => Screens, (sc) => sc.screenId)
  @JoinColumn({ name: "screenId" })
  sc: Screens;
  @ManyToOne(() => Languages, (lang) => lang.lId)
  @JoinColumn({ name: "lId" })
  lang: Languages;
  @ManyToOne(() => Format, (fr) => fr.fId)
  @JoinColumn({ name: "fId" })
  fr: Format;
}
