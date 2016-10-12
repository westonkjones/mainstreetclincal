import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task.component';
import { TaskListService } from './list/task.list.service';
import { ClinicService } from '../clinic/index';
import { UserService } from '../user/user.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [TaskComponent],
    declarations: [TaskComponent],
    providers: [ClinicService, UserService, TaskListService],
})
export class TaskModule { }
