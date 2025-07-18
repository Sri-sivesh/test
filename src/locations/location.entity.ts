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
import { Languages } from "../languages/languages.entity";
@Entity("location")
export class Location {
  @PrimaryColumn()
  loId: UUID;
  @Column()
  loName: string;
  @Column()
  lId: UUID;
  @OneToMany(() => Location, (loc) => loc.loId)
  loc: Location[];
  @ManyToOne(() => Languages, (la) => la.lId)
  @JoinColumn({ name: "lId" })
  la: Languages;
}
