import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component.ts';
import { TicketRoutes } from './ticket/ticket.routes.ts';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    ...TicketRoutes
];

export const appRoutingProviders: any[] = [];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
