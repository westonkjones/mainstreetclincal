import { Component, OnInit } from '@angular/core';

import { TaskList } from './task.list';
import { TaskListService } from './task.list.service';

@Component({
    moduleId: module.id,
    templateUrl: 'task.list.component.html',
    styleUrls: ['task.list.component.css']
})
export class TaskListComponent implements OnInit {
    private taskList: TaskList = null;
    constructor(private taskListService: TaskListService) {

    }
    ngOnInit() {
        this.taskList = this.taskListService.getTaskList('today');
        console.log(this.taskList);
    }
 }
