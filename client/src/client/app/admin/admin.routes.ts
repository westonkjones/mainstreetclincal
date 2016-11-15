import { Route } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ClinicCreateComponent } from './clinic/create/clinic.create.component';

export const AdminRoutes: Route[] = [
    {
        path: 'admin',
        children: [
            {
                path: '',
                component: AdminComponent
            },
            {
                path: 'clinic',
                children: [
                    {
                        path: 'create',
                        component: ClinicCreateComponent
                    },
                    {
                        path: ':name',
                        component: ClinicCreateComponent
                    },
                    {
                        path: '**',
                        redirectTo: 'clinic/create'
                    }
                ]
            },
            {
                path: '**',
                redirectTo: '/admin'
            }
        ]
    }
];
