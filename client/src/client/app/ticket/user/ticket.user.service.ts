import { Injectable } from '@angular/core';
import { TicketUser } from './ticket.user';

@Injectable()
export class TicketUserService {
    public users: TicketUser[] = [];
    constructor() {
        var u1 = new TicketUser();
        u1.firstName = 'Wes';
        u1.lastName = 'Jones';
        u1.fullName = 'Wes Jones';

        var u2 = new TicketUser();
        u2.firstName = 'Jason';
        u2.lastName = 'Wergin';
        u2.fullName = 'Jason Wergin';

        this.users.push(u1);
        this.users.push(u2);
    }
    getUsers(): Promise<TicketUser[]> {
        return Promise.resolve(this.users);
    }
    addUser(user: TicketUser) {
        this.users.push(user);
    }
}
