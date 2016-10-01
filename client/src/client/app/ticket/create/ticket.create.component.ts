import { Component } from '@angular/core';

import { Ticket } from '../ticket';

@Component({
    moduleId: module.id,
    selector: 'ms-create-ticket',
    templateUrl: 'ticket.create.component.html',
    styleUrls: ['ticket.create.component.css']

})
export class TicketCreateComponent {
    model = new Ticket();
 }
