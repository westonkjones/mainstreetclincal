import { Routes } from '@angular/router';

import { ClinicCreateComponent } from './create/clinic.create.component';

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
