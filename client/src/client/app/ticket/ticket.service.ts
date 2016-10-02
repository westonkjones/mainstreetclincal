import { Injectable } from '@angular/core';

import { Ticket } from './ticket';

@Injectable()
export class TicketService {
    private tickets: Ticket[];
    constructor() {
        var t1 = new Ticket();
        t1.id = 1;
        t1.created = '1/1/31';
        t1.user = 'Wes Jones';
        t1.creator = 'Jason Wergin';
        t1.description = 'To bodly go where no one has gone before';
        t1.nextStop = 'Emma Dean';
        t1.title = 'Log Stardate';

        var t2 = new Ticket();
        t2.id = 2;
        t2.created = '2/2/31';
        t2.user = 'Turtle';
        t2.creator = 'Nip Mouse';
        t2.description = 'play with nip mouse';
        t2.nextStop = 'Yertle';
        t2.title = 'Meow';
        t2.status = 'CLOSED';

        var t3 = new Ticket();
        t3.id = 3;
        t3.created = '3/3/31';
        t3.user = 'Emma Dean';
        t3.creator = 'Emma Dean';
        t3.description = 'Study';
        t3.nextStop = 'Wes Jones';
        t3.title = 'Study';

        this.tickets = [];
        this.tickets.push(t1);
        this.tickets.push(t2);
        this.tickets.push(t3);
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
