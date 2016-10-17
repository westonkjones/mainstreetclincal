import { User } from '../user/user';

export class Ticket {
    public id: number;
    public user: User;
    public nextStop: string;
    public title: string;
    public creator: string;
    public description: string;
    public created: string;
    public status: string;

    constructor() {
        this.id = 1;
        this.status = 'OPEN';
        //TODO: Set created date in constructor
        this.created = 'today';
    }
}
