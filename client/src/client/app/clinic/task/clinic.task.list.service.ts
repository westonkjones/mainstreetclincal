import { Injectable } from '@angular/core';

import { ClinicTaskList } from './list/clinic.task.list';

@Injectable()
export class ClinicTaskListService {
    public taskLists: ClinicTaskList[] = [];
    constructor() {
        var tl1 = new ClinicTaskList('October 11, 2016');
        this.taskLists.push(tl1);

        var tl2 = new ClinicTaskList('October 12, 2016');
        this.taskLists.push(tl2);
    }
    getTaskLists(): Promise<ClinicTaskList[]> {
        return Promise.resolve(this.taskLists);
    }
    getTaskList(date: string): Promise<ClinicTaskList> {
        var t = this.taskLists.filter(taskList => taskList.date === date)[0];
        if(t === null || t === undefined) {
            t = new ClinicTaskList(date);
            this.taskLists.push(t);
        }

        return Promise.resolve(t);
    }
}
