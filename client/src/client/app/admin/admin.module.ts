import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent, AdminClinicComponent }   from './index';

@NgModule({
    imports: [CommonModule],
    exports: [AdminComponent],
    declarations: [AdminComponent, AdminClinicComponent],
    providers: [],
})
export class AdminModule { }
