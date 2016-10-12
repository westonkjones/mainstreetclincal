import { Clinic } from '../../clinic/clinic';
import { StaffMember } from '../task.staffMember';

export class TaskList {
    date: string;
    clinic: Clinic;
    staff: StaffMember[] = [];
    constructor(date:string) {
        this.date = date;
        this.clinic = null;

        var staffMember = new StaffMember();
        staffMember.role = 'MA1';
        this.staff.push(staffMember);
    }
}
