import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClinicCreateComponent } from './create/clinic.create.component';
import { ClinicService } from './clinic.service';
import { ClinicTaskCreateComponent } from './task/create/clinic.task.create.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [ClinicCreateComponent, ClinicTaskCreateComponent],
    exports: [ClinicCreateComponent],
    providers: [ClinicService],
})
export class ClinicModule { }
