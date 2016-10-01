import { Component } from '@angular/core';

import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
    moduleId: module.id,
    selector: 'ms-create-ticket',
    templateUrl: 'ticket.create.component.html',
    styleUrls: ['ticket.create.component.css'],
    providers: [TicketService]
})
export class TicketCreateComponent {
    private model: Ticket;
    private service: TicketService;
    constructor(private ticketService: TicketService) {
        this.model = new Ticket();
        this.service = ticketService;
    }

    onSubmit() {
        var success = this.service.addTicket(this.model);
        success = false;
        if(success)
            this.form.reset();
    }
 }
