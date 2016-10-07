import { Task } from '../task';

export class TaskList {
    date: string;
    tasks: Task[] = [];
    repeats: string;
    constructor() {
        this.tasks = [];
        this.repeats = 'Never';
    }
}
