import { Clinic } from '../clinic/clinic';
export class DailyTasks {
    date: Date;
    clinic: Clinic;
    staffCount: number = 1;
    started: boolean;
    ma1: string;
    ma2: string;
    ma3: string;
    frontDesk: string;
}