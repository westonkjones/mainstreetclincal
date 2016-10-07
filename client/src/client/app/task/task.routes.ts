import { Routes } from '@angular/router';

import { TaskComponent } from './task.component';
import { TaskListComponent } from './list/task.list.component';

export const TaskRoutes: Routes = [
    {
        path: 'task',
        children: [
            {
                path: '',
                component: TaskComponent
            },
            {
                path: 'list',
                component: TaskListComponent
            }
        ]
    }
];
