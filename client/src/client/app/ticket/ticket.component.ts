import { Component, OnInit } from '@angular/core';

import { Ticket } from './ticket';
import { TicketService } from './ticket.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'ms-ticket',
    templateUrl: 'ticket.component.html',
    styleUrls: ['ticket.component.css'],
})
export class TicketComponent implements OnInit {
    private tickets: Ticket[] = [];
    constructor(private ticketService: TicketService, private modalService: NgbModal) {}
    ngOnInit(): void {
        this.getTickets();
    }
    openCreateModal(content: any) {
        this.modalService.open(content);
    }
    openEditModal(content: any) {
        this.modalService.open(content);
    }
    getTickets(): void {
        this.ticketService.getTickets().then(tickets => this.tickets = tickets);
    }
}
