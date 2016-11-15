import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { DailyTasksModule } from './dailyTasks/dailyTasks.module';
import { TicketModule } from './ticket/ticket.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [BrowserModule, HttpModule, CommonModule, RouterModule.forRoot(routes), NgbModule.forRoot(), SharedModule.forRoot(),
    HomeModule, TicketModule, DailyTasksModule, Ng2AutoCompleteModule, AdminModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule {}
