import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import { TicketRoutes } from './ticket/ticket.routes';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    ...TicketRoutes
];

export const appRoutingProviders: any[] = [];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
