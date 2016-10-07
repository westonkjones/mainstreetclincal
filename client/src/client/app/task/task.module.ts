import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task.component';
import { ClinicService } from '../clinic/index';
import { UserService } from '../user/user.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [],
    declarations: [TaskComponent],
    providers: [ClinicService, UserService],
})
export class TaskModule { }
