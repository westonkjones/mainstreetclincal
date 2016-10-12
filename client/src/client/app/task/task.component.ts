import { Component, OnInit } from '@angular/core';

import { Clinic, ClinicService } from '../clinic/index';
import { TaskList } from './list/task.list';
import { TaskListService } from './list/task.list.service';

@Component({
    moduleId: module.id,
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {
    private taskList: TaskList;
    private clinic: Clinic;
    private clinics: Clinic[] = [];
    private staffCount: number;
    constructor(private clinicService: ClinicService, private taskListService: TaskListService) {
        this.taskList = null;
        this.clinic = null;
        this.staffCount = 1;
    }
    ngOnInit(): void {
        this.clinicService.getClinics().then(clinics => this.clinics = clinics);
        this.taskListService.getTaskList('October 9, 2016').then(taskList => this.taskList = taskList);
    }
    addStaffMember(): void {
        this.staffCount++;
    }
    removeStaffMember(): void {
        this.staffCount--;
    }
 }
