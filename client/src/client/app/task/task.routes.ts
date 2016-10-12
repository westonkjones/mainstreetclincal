import { Routes } from '@angular/router';

import { TaskComponent } from './task.component';

export const TaskRoutes: Routes = [
    {
        path: 'task',
        children: [
            {
                path: '',
                component: TaskComponent
            }
        ]
    }
];
