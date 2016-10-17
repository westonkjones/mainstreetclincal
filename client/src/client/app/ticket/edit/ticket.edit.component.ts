import { Component, Input, Output, EventEmitter, AfterViewChecked, OnInit } from '@angular/core';

import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { User } from '../../user/index';
import { UserService } from '../../user/user.service';

@Component({
    moduleId: module.id,
    selector: 'ms-edit-ticket',
    templateUrl: 'ticket.edit.component.html',
    styleUrls: ['ticket.edit.component.css']
})
export class TicketEditComponent implements AfterViewChecked, OnInit {
    @Input() ticket: Ticket;
    @Output() deleteTicketEvent: EventEmitter<any> = new EventEmitter();
    users: User[];
    private title: string;
    private submitted: boolean;
    private successful: boolean;
    private originalTicket: Ticket;
    constructor(private ticketService: TicketService, private userService: UserService) {
        this.users = [];
        this.title = 'Edit Ticket';
        this.submitted = false;
        this.successful = false;
    }
    ngOnInit() {
        this.userService.getUsers().then(users => this.users = users);
    }
    ngAfterViewChecked() {
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
