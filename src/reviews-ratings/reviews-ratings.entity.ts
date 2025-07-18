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
import { userProfile } from "../user-profile/user-profile.entity";
import { movieDetails } from "../movie-details/movie-details.entity";
@Entity("reviews-ratings")
export class ReviewsRatings {
  @PrimaryColumn()
  rrId: UUID;
  @Column()
  mId: UUID;
  @Column()
  uId: UUID;
  @Column()
  rating: number;
  @Column()
  review: string;
  @OneToMany(() => ReviewsRatings, (reviewsRatings) => reviewsRatings.rrId)
  reviewsRatings: ReviewsRatings[];
  @ManyToOne(() => userProfile, (up) => up.uId)
  @JoinColumn({ name: "uId" })
  up: userProfile;
  @ManyToOne(() => movieDetails, (movdet) => movdet.mId)
  @JoinColumn({ name: "mId" })
  movdet: movieDetails;
}
