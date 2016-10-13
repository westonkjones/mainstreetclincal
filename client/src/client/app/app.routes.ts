import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TicketRoutes } from './ticket/index';
import { TaskRoutes } from './task/index';
import { ClinicRoutes } from './clinic/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...TicketRoutes,
  ...TaskRoutes,
  ...ClinicRoutes
];
