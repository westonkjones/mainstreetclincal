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
    private submitted: boolean;
    private successful: boolean;
    constructor(private ticketService: TicketService) {
        this.model = new Ticket();
        this.service = ticketService;
        this.submitted = false;
        this.successful = false;
    }

    onSubmit() {
        this.submitted = true;
        this.successful = this.service.addTicket(this.model);
        if(this.successful)
            this.form.reset();
    }
 }
