import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICreateUser } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userList?: ICreateUser[];

  subs: Subscription;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private statusService: StatusService,
    private router: Router) {

    this.subs = new Subscription();
    this.userForm = this.fb.group({
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


  saveUserDetails() {
    if (this.userForm.valid) {
      this.subs.add(this.apiService.createUser(this.userForm.value).subscribe((response) => {
        if (response.message) {
          this.statusService.suceessStatus(response.message);
          this.router.navigateByUrl('/user');
        }
        else {
          this.statusService.warningStatus(response.message ? response.message : 'Craete user failed');
        }
      })
      )
    }
  }

}
