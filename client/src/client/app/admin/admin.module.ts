import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminComponent, AdminClinicComponent, ClinicCreateComponent, ClinicTaskCreateComponent }   from './index';
import { ClinicService } from '../clinic/clinic.service';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [AdminComponent, ClinicCreateComponent],
    declarations: [AdminComponent, AdminClinicComponent, ClinicCreateComponent, ClinicTaskCreateComponent],
    providers: [ClinicService],
})
export class AdminModule { }
