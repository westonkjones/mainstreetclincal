import { ClinicTask } from './task/clinic.task';
import { ClinicTaskCategoryList } from './task/clinic.task.categoryList';

export class Clinic {
    name: string;
    taskLists: ClinicTaskCategoryList[]; // Clinic tasks grouped by category
    constructor() {
        this.taskLists = [];
    }
    addTask(task: ClinicTask): void {
        // Temporary workaround for when a task is edited and the category changes
        this.removeTask(task);

        for(let list of this.taskLists) {
            if(task.category === list.category) {
                list.addTask(task);
                return;
            } 
        }

        let categoryList = new ClinicTaskCategoryList(task.category);
        categoryList.addTask(task);
        this.taskLists.push(categoryList);
    }
    removeTask(task: ClinicTask) {
        for(let list of this.taskLists) {
            if(list.getTasks().some(x => x === task)) {
                list.getTasks().splice(list.getTasks().indexOf(task), 1);
                // Remove task list from this clinic if it is now empty
                if(list.getTasks().length === 0) {
                    this.taskLists.splice(this.taskLists.indexOf(list), 1);
                }
                return;
            }
        }
    }
    // Removes tasks with mismatching categories
    auditTaskLists(): void {
        for(let list of this.taskLists) {
            for(let task of list.getTasks()) {
                if(task.category !== list.category) {
                    list.removeTask(task);
                    this.addTask(task);
                }       
            }
        }
    }
}
