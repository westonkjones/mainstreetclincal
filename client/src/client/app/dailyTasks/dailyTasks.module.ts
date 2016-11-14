import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DailyTasksComponent }   from './dailyTasks.component';
import { DailyTasksService } from './dailyTasks.service';

@NgModule({
    imports: [FormsModule, CommonModule, RouterModule],
    exports: [DailyTasksComponent],
    declarations: [DailyTasksComponent],
    providers: [DailyTasksService],
})
export class DailyTasksModule { }
