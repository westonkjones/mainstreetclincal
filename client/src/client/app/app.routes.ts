import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TicketRoutes } from './ticket/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...TicketRoutes
];
