import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
    moduleId: module.id,
    selector: 'ms-ticket-widget',
    templateUrl: 'ticket.widget.component.html',
    styleUrls: ['ticket.widget.component.css']
})
export class TicketWidgetComponent {
    @Input() ticket: Ticket;
    @Output() editTicketEvent: EventEmitter<any> = new EventEmitter();
    constructor(private ticketService: TicketService) {}
    onSubmit() {
        this.ticketService.updateTicket(this.ticket);
    }
}
