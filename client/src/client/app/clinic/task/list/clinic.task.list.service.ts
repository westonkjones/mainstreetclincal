import { Injectable } from '@angular/core';

import { Clinic } from '../../clinic';
import { ClinicTaskList } from './clinic.task.list';

@Injectable()
export class ClinicTaskListService {
    public taskLists: ClinicTaskList[] = [];
    constructor() {
        var tl1 = new ClinicTaskList('1/1/2011');
        var tl2 = new ClinicTaskList('2/2/2022');
    }
    getTodaysTaskList(clinic: string) {
        return this.taskLists[0];
    }
}