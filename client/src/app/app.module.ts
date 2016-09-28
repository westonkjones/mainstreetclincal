import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutes, appRoutingProviders} from './app.routes';
import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, AppRoutes],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule { }
