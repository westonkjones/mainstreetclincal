import { Component, OnInit } from '@angular/core';

import { Ticket, TicketUser } from '../index';
import { TicketService } from '../ticket.service';
import { TicketUserService } from '../user/ticket.user.service';

@Component({
    moduleId: module.id,
    selector: 'ms-create-ticket',
    templateUrl: 'ticket.create.component.html',
    styleUrls: ['ticket.create.component.css']
})
export class TicketCreateComponent implements OnInit {
    users: TicketUser[];
    private title: string;
    private ticket: Ticket;
    private submitted: boolean;
    private successful: boolean;
    constructor(private ticketService: TicketService, private userService: TicketUserService) {
        this.users = [];
        this.title = 'Submit a Ticket';
        this.ticket = new Ticket();
        this.submitted = false;
        this.successful = false;
    }
    ngOnInit() {
        this.userService.getUsers().then(users => this.users = users);
    }
    onSubmit() {
        this.submitted = true;
        this.successful = this.ticketService.addTicket(this.ticket);
    }
}
