import { Component } from '@angular/core';

import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
    moduleId: module.id,
    selector: 'ms-create-ticket',
    templateUrl: 'ticket.create.component.html',
    styleUrls: ['ticket.create.component.css']
})
export class TicketCreateComponent {
    private title: string;
    private model: Ticket;
    private submitted: boolean;
    private successful: boolean;
    constructor(private ticketService: TicketService) {
        this.title = 'Submit a Ticket';
        this.model = new Ticket();
        this.submitted = false;
        this.successful = false;
    }

    onSubmit() {
        console.log("Submitted");
        this.submitted = true;
        this.successful = this.ticketService.addTicket(this.model);
    }
 }
