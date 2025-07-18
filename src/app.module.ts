import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserProfileModule } from './user-profile/user-profile.module';
import { MovieDetailsModule } from './movie-details/movie-details.module';
import { LanguagesModule } from './languages/languages.module';
import { LmModule } from './lm/lm.module';
import { GenresModule } from './genres/genres.module';
import { GmModule } from './gm/gm.module';
import { FormatModule } from './format/format.module';
import { FmModule } from './fm/fm.module';
import { ReviewsRatingsModule } from './reviews-ratings/reviews-ratings.module';
import { LocationsModule } from './locations/locations.module';
import { TheatreModule } from './theatre/theatre.module';
import { ScreensModule } from './screens/screens.module';
import { SeatsModule } from './seats/seats.module';
import { ShowsDetailsModule } from './show-details/show-details.module';
import { ShowSeatsModule } from './show-seats/show-seats.module';
import { TicketBookingModule } from './ticket-booking/ticket-booking.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),

    UserProfileModule,
    MovieDetailsModule,
    LanguagesModule,
    LmModule,
    GenresModule,
    GmModule,
    FormatModule,
    FmModule,
    ReviewsRatingsModule,
    LocationsModule,
    TheatreModule,
    ScreensModule,
    SeatsModule,
    ShowsDetailsModule,
    ShowSeatsModule,
    TicketBookingModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
