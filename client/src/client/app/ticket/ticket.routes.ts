import { Routes } from '@angular/router';

import { TicketComponent } from './ticket.component';
import { TicketCreateComponent } from './create/ticket.create.component';

export const TicketRoutes: Routes = [
    {
        path: 'tickets',
        children: [
            {
                path: '',
                component: TicketComponent
            },
            {
                path: 'create',
                component: TicketCreateComponent
            }
        ]
    }
];
