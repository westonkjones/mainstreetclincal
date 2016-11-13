import { Component, Input, OnInit } from '@angular/core';

import { Clinic, ClinicTask } from '../../index';

@Component({
    moduleId: module.id,
    selector: 'ms-create-task',
    templateUrl: 'clinic.task.create.component.html',
    styleUrls: ['clinic.task.create.component.css']
})
export class ClinicTaskCreateComponent implements OnInit {
    @Input('clinic') clinic: Clinic = null;
    private task: ClinicTask;
    private categories: string[];

    constructor() {
        this.task = new ClinicTask();
        this.categories = [];
    }
    ngOnInit() {
        // Build categories list
        for(let t of this.clinic.tasks) {
            if(this.categories.indexOf(t.category) === -1) { // Does not exist in categories list
                this.categories.push(t.category);
            }
        }
        console.log(this.categories);
    }
    onSubmit(): void {
        this.clinic.tasks.push(this.task);
    }
}
