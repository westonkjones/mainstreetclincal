import { Component, OnInit } from '@angular/core';

import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { User } from '../../user/index';
import { UserService } from '../../user/user.service';

@Component({
    moduleId: module.id,
    selector: 'ms-create-ticket',
    templateUrl: 'ticket.create.component.html',
    styleUrls: ['ticket.create.component.css']
})
export class TicketCreateComponent implements OnInit {
    users: User[];
    private title: string;
    private model: Ticket;
    private submitted: boolean;
    private successful: boolean;
    constructor(private ticketService: TicketService, private userService: UserService) {
        this.users = [];
        this.title = 'Submit a Ticket';
        this.model = new Ticket();
        this.submitted = false;
        this.successful = false;
    }
    ngOnInit() {
        this.userService.getUsers().then(users => this.users = users;);
    }
    onSubmit() {
        this.submitted = true;
        this.successful = this.ticketService.addTicket(this.model);
    }
}
