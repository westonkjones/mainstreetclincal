import { Component } from '@angular/core';

import { Clinic } from '../clinic';
import { ClinicService } from '../clinic.service';

@Component({
    moduleId: module.id,
    selector: 'ms-create-clinic',
    templateUrl: 'clinic.create.component.html',
    styleUrls: ['clinic.create.component.css']
})
export class ClinicCreateComponent {
    private title: string;
    private model: Clinic;
    private submitted: boolean;
    private successful: boolean;
    constructor(private clinicService: ClinicService) {
        this.title = 'Create a Clinic';
        this.model = new Clinic();
        this.submitted = false;
        this.successful = false;
    }
    onSubmit() {
        this.submitted = true;
        this.successful = this.clinicService.addClinic(this.model);
    }
}
