import { Routes } from '@angular/router';

import { TicketListComponent, TicketCreateComponent } from './index';

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
