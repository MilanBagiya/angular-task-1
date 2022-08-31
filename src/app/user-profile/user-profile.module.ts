import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        MatDialogModule
    ],
    declarations: [
        UserProfileComponent
    ],
    exports: [
    ]
})
export class UserProfileModule { }
