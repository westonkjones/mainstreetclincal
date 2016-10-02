import { Component, OnInit } from '@angular/core';

import { Ticket } from './ticket';
import { TicketService } from './ticket.service';
import { TicketWidgetComponent } from './widget/ticket.widget.component';

@Component({
    moduleId: module.id,
    selector: 'ms-ticket',
    templateUrl: 'ticket.component.html',
    styleUrls: ['ticket.component.css'],
    providers: [TicketService],
    directives: [TicketWidgetComponent]
})
export class TicketComponent implements OnInit {
    tickets: Ticket[];
    constructor(private ticketService: TicketService) {
    }
    ngOnInit(): void {
        this.tickets = this.ticketService.getTickets();
    }
}
