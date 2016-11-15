import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Clinic } from '../../../clinic/clinic';
import { ClinicService } from '../../../clinic/clinic.service';
import { ClinicTask } from '../../../clinic/task/clinic.task';

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
    constructor(private clinicService: ClinicService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
        this.clinic = new Clinic();
        this.submitted = false;
        this.successful = false;
        this.route.params.subscribe(params => {
            if(params['name'] !== null) {
                this.clinicService.getClinic(params['name']).then(clinic => {
                    if(clinic !== null)
                        this.clinic = clinic;
                });
            }
        });
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
