import { ClinicTask } from './task/clinic.task';

export class Clinic {
    name: string;
    tasks: ClinicTask[][]; // Clinic tasks grouped by category
    constructor() {
        this.tasks = [];
    }
    addTask(task: ClinicTask): void {
        for(let tasks of this.tasks) {
            if(tasks[0].category === task.category) {
                tasks.push(task);
                return;
            } 
        }
        this.tasks.push([task]);
    }
}
