import { Clinic } from '../../clinic';

export class ClinicTaskList {
    date: string;
    clinic: Clinic;
    started: boolean;
    constructor(date: string) {
        this.date = date;
        this.clinic = null;
        this.started = false;
    }
}
