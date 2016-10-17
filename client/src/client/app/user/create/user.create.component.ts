import { Component } from '@angular/core';

import { User } from '../index';
import { UserService } from '../user.service';

@Component({
    moduleId: module.id,
    selector: 'ms-create-user',
    templateUrl: 'user.create.component.html',
    styleUrls: ['user.create.component.css']
})
export class UserCreateComponent {
    private user: User;
    constructor(private userService: UserService) {
        this.user = new User();
    }
    onSubmit(): void {
        this.userService.addUser(this.user);
    }
}
