import { Component } from '@angular/core';

import { TicketUser } from '../../index';
import { TicketUserService } from '../ticket.user.service';

@Component({
    moduleId: module.id,
    selector: 'ms-create-user',
    templateUrl: 'ticket.user.create.component.html',
    styleUrls: ['ticket.user.create.component.css']
})
export class TicketUserCreateComponent {
    private user: TicketUser;
    constructor(private userService: TicketUserService) {
        this.user = new TicketUser();
    }
    onSubmit(): void {
        this.userService.addUser(this.user);
    }
}