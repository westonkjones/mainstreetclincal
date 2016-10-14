import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Clinic, ClinicService } from '../index';

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
    constructor(private clinicService: ClinicService, private modalService: NgbModal) {
        this.title = 'Create a Clinic';
        this.model = new Clinic();
        this.submitted = false;
        this.successful = false;
    }
    openCreateModal(content: any) {
        this.modalService.open(content);
    }
    onSubmit() {
        this.submitted = true;
        this.successful = this.clinicService.addClinic(this.model);
    }
}
