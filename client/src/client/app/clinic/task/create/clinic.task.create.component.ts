import { Component, Input } from '@angular/core';

import { Clinic, ClinicTask } from '../../index';

@Component({
    moduleId: module.id,
    selector: 'ms-create-task',
    templateUrl: 'clinic.task.create.component.html',
    styleUrls: ['clinic.task.create.component.css']
})
export class ClinicTaskCreateComponent {
    @Input('clinic') clinic: Clinic = null;
    model: ClinicTask;
    constructor() {
        this.model = new ClinicTask();
    }
    onSubmit(): void {
        this.clinic.tasks.push(this.model);
    }
}
