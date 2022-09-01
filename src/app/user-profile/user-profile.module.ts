import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        SharedModule
    ],
    declarations: [
        UserProfileComponent
    ],
    exports: [
    ]
})
export class UserProfileModule { }
