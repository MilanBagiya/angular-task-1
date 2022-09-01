import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';

@NgModule({
    imports: [
        CommonModule,
        CreateUserRoutingModule,
        SharedModule
    ],
    declarations: [
        CreateUserComponent
    ],
    exports: [
    ]
})
export class CreateUserModule { }
