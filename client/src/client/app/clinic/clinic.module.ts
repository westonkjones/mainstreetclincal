import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClinicCreateComponent, ClinicTaskCreateComponent, ClinicTaskListComponent, ClinicService, ClinicTaskListService } from './index';

@NgModule({
    imports: [FormsModule, CommonModule, RouterModule],
    declarations: [ClinicCreateComponent, ClinicTaskCreateComponent, ClinicTaskListComponent],
    exports: [ClinicCreateComponent, ClinicTaskListComponent],
    providers: [ClinicService, ClinicTaskListService],
})
export class ClinicModule { }
