import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task.component';
import { ClinicService } from '../clinic/index';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [],
    declarations: [TaskComponent],
    providers: [ClinicService],
})
export class TaskModule { }
