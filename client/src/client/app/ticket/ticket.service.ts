import { Injectable } from '@angular/core';

import { Ticket } from './ticket';

@Injectable()
export class TicketService {
    private tickets: Ticket[];
    constructor() {
        var t1 = new Ticket();
        t1.id = 1;
        var t2 = new Ticket();
        t2.id = 2;

        this.tickets = [];
        this.tickets.push(t1);
        this.tickets.push(t2);
    }

    getTickets(): Ticket[] {
        return this.tickets;
    }
    addTicket(ticket: Ticket): boolean {
        this.tickets.push(ticket);
        return true;
    }
    deleteTicket(ticket: Ticket): boolean {
        var index: number = this.tickets.indexOf(ticket);
        if(index > -1) {
            this.tickets.splice(index);
            return true;
        }
        return false;
    }
 }
