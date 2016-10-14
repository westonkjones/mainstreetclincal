import { ClinicTask } from '../../index';

export class ClinicTaskListStaff {
    role: string;
    name: string;
    tasks: ClinicTask[];
    constructor() {
        this.role = '';
        this.name = '';
        this.tasks = [];
    }
}
