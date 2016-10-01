import { Injectable } from '@angular/core';

import { Ticket } from './ticket';

@Injectable()
export class TicketService {
    private tickets: Ticket[];
    constructor() {
        this.tickets = [];
    }

    getTickets(): Ticket[] {
        return this.tickets;
    }
    addTicket(ticket): boolean {
        this.tickets.push(ticket);
        return true;
    }
    deleteTicket(ticket): boolean {
        var index: number = this.tickets.indexOf(ticket);
        if(index > -1) {
            this.tickets.splice(index);
            return true;
        }
        return false;
    }
 }
