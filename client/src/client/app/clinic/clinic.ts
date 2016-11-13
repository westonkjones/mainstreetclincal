import { ClinicTaskList } from './task/list/clinic.task.list';
import { ClinicTaskListService } from './task/list/clinic.task.list.service';
import { ClinicTask } from './task/clinic.task';

export class Clinic {
    name: string;
    tasks: ClinicTask[];
    constructor() {
        this.tasks = [];
    }
}
