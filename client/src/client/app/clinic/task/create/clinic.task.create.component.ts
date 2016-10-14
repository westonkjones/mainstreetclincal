import { Component, Input } from '@angular/core';

import { Task } from '../clinic.task';
import { Clinic } from '../../clinic';

@Component({
    moduleId: module.id,
    selector: 'ms-create-task',
    templateUrl: 'clinic.task.create.component.html',
    styleUrls: ['clinic.task.create.component.css']
})
export class ClinicTaskCreateComponent {
    @Input('clinic') clinic: Clinic = null;
    model: Task;
    constructor() {
        this.model = new Task();
    }
    onSubmit(): void {
        this.clinic.tasks.push(this.model);
    }
}
