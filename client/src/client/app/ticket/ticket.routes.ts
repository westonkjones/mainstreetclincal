import { Routes } from '@angular/router';

import { TicketListComponent } from './list/ticket.list.component';
import { TicketCreateComponent } from './create/ticket.create.component';

export const TicketRoutes: Routes = [
    {
        path: 'ticket',
        children: [
            {
                path: 'list',
                component: TicketListComponent
            },
            {
                path: 'create',
                component: TicketCreateComponent
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'ticket/list'
    }
];
