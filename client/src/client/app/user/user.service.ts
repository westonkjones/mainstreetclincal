import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
    public users: User[] = [];
    constructor() {
        var u1 = new User();
        u1.firstName = 'Wes';
        u1.lastName = 'Jones';
        u1.fullName = 'Wes Jones';

        var u2 = new User();
        u2.firstName = 'Jason';
        u2.lastName = 'Wergin';
        u2.fullName = 'Jason Wergin';

        this.users.push(u1);
        this.users.push(u2);
    }
    getUsers(): Promise<User[]> {
        return Promise.resolve(this.users);
    }
    addUser(user: User) {
        this.users.push(user);
    }
}
