import { NgModule } from '@angular/core';

import { TicketComponent } from './ticket.component.ts';

@NgModule({
    declarations: [TicketComponent],
    exports: [TicketComponent]
})
export class TicketModule { }
