import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
    public users: User[] = [];
    constructor() {
        var u1 = new User();
        u1.firstName = 'Wes';
        u1.lastName = 'Jones';

        var u2 = new User();
        u2.firstName = 'Jason';
        u2.lastName = 'Wergin';

        this.users.push(u1);
        this.users.push(u2);
    }
    getUsers(): Promise<User[]> {
        return Promise.resolve(this.users);
    }
}
