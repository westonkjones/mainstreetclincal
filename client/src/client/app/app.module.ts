import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { TicketModule } from './ticket/ticket.module';
import { TaskModule } from './task/task.module';
import { ClinicModule } from './clinic/clinic.module';

@NgModule({
  imports: [BrowserModule, HttpModule, CommonModule, RouterModule.forRoot(routes), NgbModule, SharedModule.forRoot(),
    HomeModule, TicketModule, TaskModule, ClinicModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule {}
