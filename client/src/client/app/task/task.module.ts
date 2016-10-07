import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task.component';
import { TaskListComponent } from './index';
import { TaskListService } from './index';
import { ClinicService } from '../clinic/index';
import { UserService } from '../user/user.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [TaskComponent, TaskListComponent],
    declarations: [TaskComponent, TaskListComponent],
    providers: [ClinicService, UserService, TaskListService],
})
export class TaskModule { }
