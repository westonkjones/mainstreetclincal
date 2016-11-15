import { Route } from '@angular/router';

import { ClinicSelectComponent } from './select/clinic.select.component';

export const ClinicRoutes: Route[] = [
  {
    path: 'clinic',
    children: [
        {
            path: 'select',
            component: ClinicSelectComponent
        },
        {
            path: '**',
            redirectTo: '/clinic/select'
        }
    ]
  }
];
