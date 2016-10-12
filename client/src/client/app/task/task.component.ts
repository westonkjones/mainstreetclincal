import { Component, OnInit } from '@angular/core';

import { Clinic, ClinicService } from '../clinic/index';
import { TaskList } from './list/task.list';
import { TaskListService } from './list/task.list.service';
import { StaffMember } from './task.staffMember';

@Component({
    moduleId: module.id,
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {
    private taskList: TaskList;
    private clinics: Clinic[] = [];
    constructor(private clinicService: ClinicService, private taskListService: TaskListService) {
        this.taskList = null;
    }
    ngOnInit(): void {
        this.clinicService.getClinics().then(clinics => this.clinics = clinics);
        this.taskListService.getTaskList('October 9, 2016').then(taskList => this.taskList = taskList);
    }
    addStaffMember(): void {
        var staffMember = new StaffMember();
        if(this.taskList.staff.length === 1)
            staffMember.role = 'MA2';
        if(this.taskList.staff.length === 2)
            staffMember.role = 'Front Desk';
        if(this.taskList.staff.length === 3)
            staffMember.role = 'MA3';

        this.taskList.staff.push(staffMember);
    }
    removeStaffMember(): void {
        this.taskList.staff.splice(this.taskList.staff.length - 1, 1);
    }
 }
