import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TicketListComponent } from './index';
import { TicketCreateComponent } from './create/ticket.create.component';
import { TicketEditComponent } from './edit/ticket.edit.component';
import { TicketWidgetComponent } from './widget/ticket.widget.component';
import { TicketUserCreateComponent } from './user/create/ticket.user.create.component';
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
