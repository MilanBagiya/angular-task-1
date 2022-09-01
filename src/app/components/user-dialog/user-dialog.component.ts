import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  userId?: number;
  subs: Subscription;

  editForm: FormGroup;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    private statusService: StatusService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) data: any) {

    this.userId = data.id;

    this.subs = new Subscription();
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      salary: [, [Validators.required]],
      age: [, [Validators.required]],
      email: [''],
      country: [''],
      avatar: [''],
    });
  }

  ngOnInit(): void {
  }

  save() {
    if (this.editForm.valid) {
      if (this.userId) {
          this.subs.add(this.apiService.editUser(this.userId, this.editForm.value).subscribe((response) => {
            if (response.message) {
              this.statusService.suceessStatus(response.message);
              this.dialogRef.close();
            }
            else {
              this.statusService.warningStatus(response.message ? response.message : 'Craete user failed');
            }
          })
        )
      }
    }
  }

  close() {
    this.dialogRef.close();
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
