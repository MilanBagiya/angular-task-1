import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICommonResponseModel, IuserModel } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  subs: Subscription;
  userList?: IuserModel[];

  constructor(
    private apiService: ApiService,
    private statusService: StatusService) {
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    debugger
    this.subs.add(
      this.apiService.getUserList()
        .subscribe((user: ICommonResponseModel<IuserModel[]>) => {
          if (user.status) {
            debugger
            this.userList = user.data;
            this.statusService.suceessStatus(user.message ? user.message : '');
          }
        })
    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
