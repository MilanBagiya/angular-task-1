import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICommonResponseModel, IuserModel } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { StatusService } from '../services/status.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  subs: Subscription;
  userList?: IuserModel[];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private statusService: StatusService) {
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.subs.add(
      this.apiService.getUserList()
        .subscribe((user: ICommonResponseModel<IuserModel[]>) => {
          if (user.status) {
            this.userList = user.data;
            this.statusService.suceessStatus(user.message ? user.message : '');
          }
        })
    )
  }

  openEdit(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: id,
    };
    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.getUserList();
        }
      }
    )
  }


}
