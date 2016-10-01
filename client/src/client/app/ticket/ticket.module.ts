import { NgModule } from '@angular/core';

import { TicketComponent }   from './index';
import { TicketCreateComponent }   from './create/ticket.create.component';

@NgModule({
    imports: [],
    declarations: [TicketComponent, TicketCreateComponent],
    exports: [TicketComponent],
    providers: [],
})
export class TicketModule { }
