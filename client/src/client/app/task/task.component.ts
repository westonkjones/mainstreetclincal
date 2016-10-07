import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { Clinic } from '../clinic/index';
import { ClinicService } from '../clinic/index';

@Component({
    moduleId: module.id,
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {
    clinic: Clinic;
    private clinics: Clinic[];
    constructor(private clinicService: ClinicService) {
        this.clinic = null;
    }
    ngOnInit(): void {
        this.getClinics();
    }
    getClinics(): void {
        this.clinicService.getClinics().then(clinics => this.clinics = clinics);
    }
    getClinic(): Clinic {
        return this.clinic;
    }
 }
