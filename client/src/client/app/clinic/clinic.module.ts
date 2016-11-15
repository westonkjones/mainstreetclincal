import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClinicSelectComponent } from './select/clinic.select.component';
import { ClinicService } from './clinic.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ClinicSelectComponent],
    declarations: [ClinicSelectComponent],
    providers: [],
})
export class ClinicModule { }
