import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./create-user/create-user.module').then((m) => m.CreateUserModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-profile/user-profile.module').then((m) => m.UserProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
