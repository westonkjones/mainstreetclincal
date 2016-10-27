import { Component, OnInit } from '@angular/core';

import { Ticket } from '../index';
import { TicketService } from '../ticket.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'ms-ticket',
    templateUrl: 'ticket.list.component.html',
    styleUrls: ['ticket.list.component.css'],
})
export class TicketListComponent implements OnInit {
    private tickets: Ticket[] = [];
    private activeTab: string;
    constructor(private ticketService: TicketService, private modalService: NgbModal) {
      this.activeTab = 'open';
    }
    ngOnInit(): void {
        this.getTickets();
    }
    openModal(content: any, ticket: Ticket) {
        this.modalService.open(content);
    }
    getTickets(): void {
        this.ticketService.getTickets().then(tickets => this.tickets = tickets);
    }
    deleteTicket(ticket: Ticket) {
        this.ticketService.deleteTicket(ticket);
    }
}
