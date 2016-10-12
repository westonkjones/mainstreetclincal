import { Clinic } from '../../clinic/clinic';

export class TaskList {
    date: string;
    clinic: Clinic;
    constructor(date:string) {
        this.date = date;
        this.clinic = null;
    }
}
