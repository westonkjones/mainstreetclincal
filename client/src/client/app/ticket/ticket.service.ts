import { Injectable } from '@angular/core';

import { Ticket, TicketUser } from './index';

@Injectable()
export class TicketService {
    public tickets: Ticket[] = [];
    constructor() {
        var u1 = new TicketUser();
        u1.firstName = 'Wes';
        u1.lastName = 'Jones';
        u1.fullName = 'Wes Jones';

        var u2 = new TicketUser();
        u2.firstName = 'Jason';
        u2.lastName = 'Wergin';
        u2.fullName = 'Jason Wergin';

        var t1 = new Ticket();
        t1.id = 1;
        t1.user = u1;
        t1.created = '1/1/31';
        t1.creator = 'asdfadf';
        t1.description = 'To bodly go where no one has gone before';
        t1.nextStop = u2;
        t1.title = 'Log Stardate';

        var t2 = new Ticket();
        t2.id = 2;
        t2.user = u1;
        t2.nextStop = u2;
        t2.created = '2/2/31';
        t2.creator = 'Nip Mouse';
        t2.description = 'play with nip mouse';
        t2.title = 'Meow';
        t2.status = 'CLOSED';

        var t3 = new Ticket();
        t3.id = 3;
        t3.user = u1;
        t3.created = '3/3/31';
        t3.creator = 'Emma Dean';
        t3.description = 'Study';
        t3.nextStop = u1;
        t3.title = 'Study';

        this.tickets.push(t1);
        this.tickets.push(t2);
        this.tickets.push(t3);
    }

    getTickets(): Promise<Ticket[]> {
        return Promise.resolve(this.tickets);
    }
    addTicket(ticket: Ticket): boolean {
        this.tickets.push(ticket);
        return true;
    }
    deleteTicket(ticket: Ticket): boolean {
        var index: number = this.tickets.indexOf(ticket);
        if(index > -1) {
            this.tickets.splice(index, 1);
            return true;
        }
        console.log('returning false');
        return false;
    }
    updateTicket(ticket: Ticket): boolean {
        // Handle promise here
        return true;
    }
 }
