/* eslint-disable prettier/prettier */
import { UUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity("format")
export class Format {
  @PrimaryColumn()
  fId: UUID;
  @Column()
  fName: string;
}
