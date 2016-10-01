import { Injectable } from '@angular/core';

import { Ticket } from './ticket';

@Injectable()
export class TicketService {
    private tickets: Ticket[];
    constructor() {
        this.tickets = [];

        var t1 = new Ticket();
        t1.id = 1;
        var t2 = new Ticket();
        t2.id = 2;

        this.tickets.push(t1);
        this.tickets.push(t2);
    }

    getTickets(): Ticket[] {
        return this.tickets;
    }
    addTicket(ticket): boolean {
        this.tickets.push(ticket);
        return true;
    }
    deleteTicket(ticket): boolean {
        return true;
    }
 }
