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
    private task: Task;
    private clinic: Clinic;
    private clinicList: Clinic[];
    constructor(private clinicService: ClinicService) {
        this.task = new Task();
    }
    ngOnInit(): void {
        this.getClinics();
    }
    getClinics(): void {
        this.clinicService.getClinics().then(clinics => this.clinics = clinics);
    }
 }
