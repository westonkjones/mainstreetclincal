import { Routes } from '@angular/router';

import { ClinicCreateComponent } from './create/clinic.create.component';

export const ClinicRoutes: Routes = [
    {
        path: 'clinics',
        children: [
            {
                path: 'create',
                component: ClinicCreateComponent
            }
        ]
    }
];
