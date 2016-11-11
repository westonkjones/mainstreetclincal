import { Routes } from '@angular/router';

import { ClinicCreateComponent } from './create/clinic.create.component';
import { ClinicTaskListComponent } from './task/list/clinic.task.list.component';

export const ClinicRoutes: Routes = [
    {
        path: 'clinic',
        children: [
            {
                path: 'task',
                children: [
                    {
                        path: 'list',
                        component: ClinicTaskListComponent
                    },
                    {
                        path: '**',
                        redirectTo: 'list'
                    }
                ]
            },
            {
                path: 'create',
                component: ClinicCreateComponent
            }
        ]
    }
];
