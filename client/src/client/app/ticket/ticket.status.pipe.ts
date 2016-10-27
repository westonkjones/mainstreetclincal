import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from './index';

@Pipe({
  name: 'TicketStatusPipe'
})
export class TicketStatusPipe implements PipeTransform {
  transform(tickets: Ticket[], status: string): Ticket[] {
    return tickets.filter(ticket => {
      return ticket.status === status;
    });
  }
}
