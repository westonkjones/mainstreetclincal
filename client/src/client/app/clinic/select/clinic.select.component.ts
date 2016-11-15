import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Clinic } from '../clinic';
import { ClinicService } from '../clinic.service';

@Component({
    moduleId: module.id,
    selector: 'ms-clinic-select',
    templateUrl: 'clinic.select.component.html'
})
export class ClinicSelectComponent implements OnInit {
    clinic: Clinic;
    clinics: Clinic[] = [];
    constructor(private clinicService: ClinicService, private location: Location) {}

    ngOnInit() {
        this.clinic = this.clinicService.getCurrentclinic();
        this.clinicService.getClinics().then(clinics => this.clinics = clinics);
    }
    onSelect(clinic: Clinic) {
        this.clinicService.setCurrentClinic(this.clinic);
        this.location.back();
    }
}