import { Route } from '@angular/router';
import { TicketComponent } from './ticket.component.ts';

export const TicketRoutes: Route[] = [
    {
        path: 'tickets',
        component: TicketComponent
    }
];
