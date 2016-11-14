import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { SharedModule } from '../shared/shared.module';

import { ClinicCreateComponent } from './index'; 
import { ClinicService } from './clinic.service';
import { ClinicTaskCreateComponent } from './task/create/clinic.task.create.component';

@NgModule({
    imports: [CommonModule, FormsModule, Ng2AutoCompleteModule, SharedModule],
    declarations: [ClinicCreateComponent, ClinicTaskCreateComponent],
    exports: [ClinicCreateComponent, ClinicTaskCreateComponent],
    providers: [ClinicService],
})
export class ClinicModule { }
