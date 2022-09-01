import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { UserDialogComponent } from '../components/user-dialog/user-dialog.component';

@NgModule({
  imports: [    
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,  
    FormsModule,
  ],

  declarations: [
    UserDialogComponent, 
    UserCardComponent
  ],

  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,  
    FormsModule,
    UserDialogComponent, 
    UserCardComponent
  ],
})
export class SharedModule { }