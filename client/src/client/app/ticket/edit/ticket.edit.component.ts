import { Component, Input } from '@angular/core';

import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
    moduleId: module.id,
    selector: 'ms-edit-ticket',
    templateUrl: 'ticket.edit.component.html',
    styleUrls: ['ticket.edit.component.css']
})
export class TicketEditComponent {
    @Input() ticket: Ticket;
    private title: string;
    private submitted: boolean;
    private successful: boolean;
    private originalTicket: Ticket;
    constructor(private ticketService: TicketService) {
        this.title = 'Edit Ticket';
        this.submitted = false;
        this.successful = false;
        this.originalTicket = this.ticket;
    }
    onSubmit() {
        this.submitted = true;
        this.successful = this.ticketService.updateTicket(this.ticket);
    }
    deleteTicket() {
        this.ticketService.deleteTicket(this.originalTicket);
    }
}
