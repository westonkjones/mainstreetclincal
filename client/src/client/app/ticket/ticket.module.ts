import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TicketComponent } from './index';
import { TicketCreateComponent } from './create/ticket.create.component';
import { TicketEditComponent } from './edit/ticket.edit.component';
import { TicketWidgetComponent } from './widget/ticket.widget.component';
import { TicketService } from './ticket.service';
import { UserService } from '../user/user.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
    imports: [FormsModule, CommonModule, Ng2AutoCompleteModule],
    declarations: [TicketComponent, TicketCreateComponent, TicketEditComponent, TicketWidgetComponent],
    exports: [TicketComponent, TicketWidgetComponent],
    providers: [TicketService, UserService]
})
export class TicketModule {}
