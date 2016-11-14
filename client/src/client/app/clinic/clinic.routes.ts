import { Routes } from '@angular/router';

import { ClinicCreateComponent } from './index';

export const ClinicRoutes: Routes = [
    {
        path: 'clinic',
        children: [
            {
                path: 'create',
                component: ClinicCreateComponent
            }
        ]
    }
];
