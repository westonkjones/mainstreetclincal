import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Clinic } from '../../clinic/clinic';
import { ClinicService } from '../../clinic/clinic.service';

@Component({
    moduleId: module.id,
    selector: 'ms-admin-clinic',
    templateUrl: 'admin.clinic.component.html'
})
export class AdminClinicComponent implements OnInit {
    clinics: Clinic[] = [];
    constructor(private clinicService: ClinicService, private modalService: NgbModal) { }
    ngOnInit() { 
        this.clinicService.getClinics().then(clinics => this.clinics = clinics);
    }
    removeClinic(clinic: Clinic): void {
        this.clinicService.removeClinic(clinic);
    }
    openModal(content: any) {
        this.modalService.open(content);
    }
}
