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
import { Theatre } from "src/theatre/theatre.entity";
@Entity("screens")
export class Screens {
  @PrimaryColumn()
  screenId: UUID;
  @Column()
  theatreId: UUID;
  @OneToMany(() => Screens, (screens) => screens.screenId)
  screens: Screens[];
  @ManyToOne(() => Theatre, (thea) => thea.theatreId)
  @JoinColumn({ name: "theatreId" })
  thea: Theatre;
}
