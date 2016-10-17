import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TicketListComponent, TicketCreateComponent, TicketEditComponent, TicketUserCreateComponent, TicketWidgetComponent } from './index';
import { TicketService } from './ticket.service';
import { TicketUserService } from './user/ticket.user.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
    imports: [FormsModule, CommonModule, Ng2AutoCompleteModule],
    declarations: [TicketListComponent, TicketCreateComponent, TicketEditComponent, TicketWidgetComponent, TicketUserCreateComponent],
    exports: [TicketListComponent, TicketWidgetComponent],
    providers: [TicketService, TicketUserService]
})
export class TicketModule {}
