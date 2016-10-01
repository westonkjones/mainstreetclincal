import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { Ticket } from '../ticket';

@Component({
    moduleId: module.id,
    selector: 'ms-ticket-widget',
    templateUrl: 'ticket.widget.component.html',
    styleUrls: ['ticket.widget.component.css']
})
export class TicketWidgetComponent {
    @Input() ticket: Ticket;
}
