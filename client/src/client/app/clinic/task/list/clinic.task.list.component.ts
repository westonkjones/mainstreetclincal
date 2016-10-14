import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Clinic, ClinicService, ClinicTaskList, ClinicTaskListStaff } from '../../index';
import { ClinicTaskListService } from './clinic.task.list.service';


@Component({
    moduleId: module.id,
    selector: 'ms-task-list',
    templateUrl: 'clinic.task.list.component.html',
    styleUrls: ['clinic.task.list.component.css']
})
export class ClinicTaskListComponent implements OnInit {
    private taskList: ClinicTaskList;
    private clinics: Clinic[] = [];
    constructor(private clinicService: ClinicService, private taskListService: ClinicTaskListService, private modalService: NgbModal) {
        this.taskList = null;
    }
    ngOnInit(): void {
        this.clinicService.getClinics().then(clinics => this.clinics = clinics);
        this.taskListService.getTaskList('October 9, 2016').then(taskList => this.taskList = taskList);
    }
    addStaffMember(): void {
        var staffMember = new ClinicTaskListStaff();
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
    openCreateModal(content: any) {
        this.modalService.open(content);
    }
 }
