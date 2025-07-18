/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UUID } from "crypto";
import { TicketBooking } from "src/ticket-booking/ticket-booking.entity";
import { Repository } from "typeorm";

@Injectable()
export class TicketBookingService {
  constructor(
    @InjectRepository(TicketBooking)
    private readonly TicketBookingRepo: Repository<TicketBooking>,
  ) { }

  async createTicketBooking(
    data: Partial<TicketBooking>,
  ): Promise<TicketBooking> {
    const ticketBooking = this.TicketBookingRepo.create(data);
    return this.TicketBookingRepo.save(ticketBooking);
  }
  async getAllTicketBooking() {
    return this.TicketBookingRepo.find();
  }

  async getTicketBookingById(tbId: UUID) {
    return this.TicketBookingRepo.findOneBy({ tbId });
  }

  async updateTicketBooking(tbId: UUID, data: Partial<TicketBooking>) {
    await this.TicketBookingRepo.update(tbId, data);
    return this.getTicketBookingById(tbId);
  }

  async deleteTicketBooking(tbId: UUID) {
    await this.TicketBookingRepo.delete(tbId);
    return { deleted: true };
  }
}
