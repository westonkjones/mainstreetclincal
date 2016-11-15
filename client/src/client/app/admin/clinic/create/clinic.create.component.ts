import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Clinic } from '../../../clinic/clinic';
import { ClinicService } from '../../../clinic/clinic.service';
import { ClinicTask } from '../task/clinic.task';

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
    constructor(private clinicService: ClinicService, private router: Router, private modalService: NgbModal) {
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
        this.router.navigate(['/admin']);
    }
}
