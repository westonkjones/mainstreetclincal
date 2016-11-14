import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Clinic, ClinicTask } from '../index';
import { ClinicService } from '../clinic.service';

@Component({
    moduleId: module.id,
    selector: 'ms-create-clinic',
    templateUrl: 'clinic.create.component.html',
    styleUrls: ['clinic.create.component.css']
})
export class ClinicCreateComponent {
    private title: string = 'Create a Clinic';;
    private clinic: Clinic;
    private submitted: boolean;
    private successful: boolean;
    constructor(private clinicService: ClinicService, private modalService: NgbModal) {
        this.clinic = new Clinic();
        this.submitted = false;
        this.successful = false;
    }
    openModal(content: any) {
        this.modalService.open(content);
    }
    onSubmit() {
        this.submitted = true;
        this.successful = this.clinicService.addClinic(this.clinic);
    }
}
