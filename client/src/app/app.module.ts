import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component.ts';
import {AppRoutes, appRoutingProviders} from './app.routes.ts';

import {HomeComponent} from './home/home.component.ts';

import { TicketModule } from './ticket/ticket.module.ts';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, AppRoutes, TicketModule],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule { }
