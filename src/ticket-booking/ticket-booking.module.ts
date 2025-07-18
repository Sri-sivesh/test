/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TicketBookingController } from './ticket-booking.controller';
import { TicketBookingService } from './ticket-booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketBooking } from './ticket-booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TicketBooking])],
  controllers: [TicketBookingController],
  providers: [TicketBookingService],
  exports: [TicketBookingService],
})
export class TicketBookingModule {}
