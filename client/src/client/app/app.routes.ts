import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TicketRoutes } from './ticket/index';
import { DailyTasksRoutes } from './dailyTasks/dailyTasks.routes';
import { ClinicRoutes } from './clinic/clinic.routes';
import { AdminRoutes } from './admin/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...TicketRoutes,
  ...DailyTasksRoutes,
  ...ClinicRoutes,
  ...AdminRoutes
];
