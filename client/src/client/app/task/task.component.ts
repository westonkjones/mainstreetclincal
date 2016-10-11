import { Component, OnInit } from '@angular/core';

import { Clinic, ClinicService } from '../clinic/index';
import { TaskListComponent } from './index';

@Component({
    moduleId: module.id,
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {
    private clinics: Clinic[] = [];
    private clinic: Clinic;
    private staffCount: number;
    private staff: string[] = [];
    constructor(private clinicService: ClinicService) {
        this.clinic = null;
        this.staffCount = 1;
    }
    ngOnInit(): void {
        this.clinicService.getClinics().then(clinics => this.clinics = clinics);
    }
    addStaffMember(): void {
        this.staffCount++;
    }
    removeStaffMember(): void {
        this.staffCount--;
    }
 }
