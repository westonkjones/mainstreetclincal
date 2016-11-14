import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ClinicCreateComponent, ClinicTaskCreateComponent } from './index'; 
import { ClinicService } from './clinic.service';

@NgModule({
    imports: [CommonModule, FormsModule, SharedModule],
    declarations: [ClinicCreateComponent, ClinicTaskCreateComponent],
    exports: [ClinicCreateComponent, ClinicTaskCreateComponent],
    providers: [ClinicService],
})
export class ClinicModule { }
