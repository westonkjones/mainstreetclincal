export class Ticket {
    constructor(
        public id: number,
        public user: string,
        public nextStop: string,
        public title: string,
        public creator: string,
        public description: string,
        public created: string,
        public status: string
    ) {
        this.status = 'OPEN';
        //TODO: Send email to user and nexst stop user
    }
}
