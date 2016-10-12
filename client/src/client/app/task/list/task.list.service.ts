import { Injectable } from '@angular/core';

import { Task } from '../task';
import { TaskList } from './task.list';

@Injectable()
export class TaskListService {
    public taskLists: TaskList[] = [];
    constructor() {
        /*
        var t1 = new Task();
        t1.description = 'testing';
        var t2 = new Task();
        t2.description = 'testin2';
        var tl1 = new TaskList();
        tl1.tasks.push(t1);
        tl1.tasks.push(t2);
        tl1.date = 'today';
        tl1.repeats = 'weekly';

        var tl2 = new TaskList();
        tl2.tasks.push(t1);
        tl2.tasks.push(t2);
        tl2.date = 'tomorrow';
        tl2.repeats = 'weekly';
        */

        var tl1 = new TaskList('October 11, 2016');
        var tl2 = new TaskList('October 12, 2016');

        this.taskLists.push(tl1);
        this.taskLists.push(tl2);
    }
    getTaskLists(): Promise<TaskList[]> {
        return Promise.resolve(this.taskLists);
    }
    getTaskList(date: string): Promise<TaskList> {
        var t = this.taskLists.filter(taskList => taskList.date === date)[0];
        return Promise.resolve(t);
    }
}
