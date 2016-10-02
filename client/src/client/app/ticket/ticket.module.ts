import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TicketComponent } from './index';
import { TicketCreateComponent } from './create/ticket.create.component';
import { TicketWidgetComponent } from './widget/ticket.widget.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [TicketComponent, TicketCreateComponent, TicketWidgetComponent],
    exports: [TicketComponent, TicketWidgetComponent],
    providers: [],
})
export class TicketModule { }
