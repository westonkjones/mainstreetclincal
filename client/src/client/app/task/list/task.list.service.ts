import { Injectable } from '@angular/core';

import { TaskList } from './task.list';

@Injectable()
export class TaskListService {
    public taskLists: TaskList[] = [];
    constructor() {
        var tl1 = new TaskList('October 11, 2016');
        this.taskLists.push(tl1);

        var tl2 = new TaskList('October 12, 2016');
        this.taskLists.push(tl2);
    }
    getTaskLists(): Promise<TaskList[]> {
        return Promise.resolve(this.taskLists);
    }
    getTaskList(date: string): Promise<TaskList> {
        var t = this.taskLists.filter(taskList => taskList.date === date)[0];
        if(t === null || t === undefined) {
            t = new TaskList(date);
            this.taskLists.push(t);
        }

        return Promise.resolve(t);
    }
}
