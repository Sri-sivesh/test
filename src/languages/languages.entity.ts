/* eslint-disable prettier/prettier */
import { UUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity("languages")
export class Languages {
  @PrimaryColumn()
  lId: UUID;
  @Column()
  lName: string;
}
