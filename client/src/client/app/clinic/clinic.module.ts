import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClinicCreateComponent } from './create/clinic.create.component';
import { ClinicService } from './clinic.service';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [ClinicCreateComponent],
    exports: [ClinicCreateComponent],
    providers: [ClinicService],
})
export class ClinicModule { }
