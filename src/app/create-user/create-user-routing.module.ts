import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user.component';

const routes: Routes = [
    {
        path: '',
        component: CreateUserComponent,
        children: [
            {
                path: 'create',
                pathMatch: 'prefix',
                component: CreateUserComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateUserRoutingModule { }
