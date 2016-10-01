import { Routes } from '@angular/router';

import { TicketComponent } from './index';
import { TicketCreateComponent } from './create/ticket.create.component';

export const TicketRoutes: Routes[] = [
    {
        path: 'ticket',
        component:  TicketComponent
    },
    {
        path: 'ticket/create',
        component: TicketCreateComponent
    }
];
