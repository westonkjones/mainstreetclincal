import { Component, Input } from '@angular/core';

import { Clinic } from '../../../../clinic/clinic';
import { ClinicTask } from '../../../../clinic/task/clinic.task';

@Component({
    moduleId: module.id,
    selector: 'ms-create-task',
    templateUrl: 'clinic.task.create.component.html',
    styleUrls: ['clinic.task.create.component.css']
})
export class ClinicTaskCreateComponent {
    @Input('clinic') clinic: Clinic = null;
    @Input('task') task: ClinicTask = new ClinicTask();
    public title: string = 'New Task';

    onSubmit(): void {
        this.clinic.addTask(this.task);
    }
}
