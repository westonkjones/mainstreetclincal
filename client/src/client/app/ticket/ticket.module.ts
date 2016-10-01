import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TicketComponent }   from './index';
import { TicketCreateComponent }   from './create/ticket.create.component';

@NgModule({
    imports: [FormsModule],
    declarations: [TicketComponent, TicketCreateComponent],
    exports: [TicketComponent],
    providers: [],
})
export class TicketModule { }
