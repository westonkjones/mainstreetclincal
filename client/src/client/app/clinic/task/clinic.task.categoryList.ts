import { ClinicTask } from '../index';

export class ClinicTaskCategoryList {
    category: string;
    private tasks: ClinicTask[];
    constructor(category: string) {
        this.tasks = [];
        this.category = category;
    }
    addTask(task: ClinicTask): void {
        if(task.category === this.category) {
            this.tasks.push(task);
        } else {
            throw new TypeError('Failed to add task to category list ' + this.category);
        }
    }
    removeTask(task: ClinicTask): void {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
    getTasks(): ClinicTask[] {
        return this.tasks;
    }
}