import { NgModule } from '@angular/core';

import { UserService } from './user.service';
import { UserCreateComponent } from './index';

@NgModule({
    imports: [],
    declarations: [UserCreateComponent],
    exports: [UserService, UserCreateComponent],
    providers: [UserService],
})
export class NameModule {}
