import { Clinic, ClinicTaskListStaff } from '../../index';

export class ClinicTaskList {
    date: string;
    clinic: Clinic;
    staff: ClinicTaskListStaff[];
    constructor(date:string) {
        this.date = date;
        this.clinic = null;
        this.staff = [];

        var staffMember = new ClinicTaskListStaff();
        staffMember.role = 'MA1';
        this.staff.push(staffMember);
    }
}
