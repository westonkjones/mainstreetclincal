import { Component, OnInit } from '@angular/core';

import { Ticket } from './ticket';
import { TicketService } from './ticket.service';
import { TicketWidgetComponent } from './widget/ticket.widget.component';
import { TicketCreateComponent } from './create/ticket.create.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'ms-ticket',
    templateUrl: 'ticket.component.html',
    styleUrls: ['ticket.component.css'],
    directives: [TicketWidgetComponent, TicketCreateComponent]
})
export class TicketComponent implements OnInit {
    private tickets: Ticket[] = [];
    constructor(private ticketService: TicketService, private modalService: NgbModal) {}
    ngOnInit(): void {
        this.getTickets();
    }
    openCreateModal(content) {
        this.modalService.open(content);
    }
    getTickets(): void {
        this.ticketService.getTickets().then(tickets => this.tickets = tickets);
    }
}
