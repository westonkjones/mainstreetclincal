export class Ticket {
    public id: number;
    public user: string;
    public nextStop: string;
    public title: string;
    public creator: string;
    public description: string;
    public created: string;
    public status: string;

    constructor() {
        //TODO: Make UUID FOR ID
        this.id = 1;
        this.status = 'OPEN';
        //TODO: Set created date in constructor
        this.created = 'today';
    }
    onSubmit() {
        //TODO: send email to user and nextStop user
    }
}
