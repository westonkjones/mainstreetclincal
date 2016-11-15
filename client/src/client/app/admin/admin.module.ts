import { NgModule } from '@angular/core';

import { AdminComponent, AdminClinicComponent }   from './index';

@NgModule({
    imports: [],
    exports: [AdminComponent],
    declarations: [AdminComponent, AdminClinicComponent],
    providers: [],
})
export class AdminModule { }
