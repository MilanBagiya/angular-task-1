import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICommonResponseModel, ICreateUser, IuserModel } from '../models/user.model';

@Injectable()

export class ApiService {

  baseUrl: string;

  constructor(
    private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  private getEndPoint(endPoint: string): string {
    return this.baseUrl + endPoint;
  }

  getUserList(): Observable<ICommonResponseModel<IuserModel[]>> {
    return this.http.get<ICommonResponseModel<IuserModel[]>>(this.getEndPoint('employees'));
  }

  createUser(UserModel: ICreateUser): Observable<ICommonResponseModel<IuserModel[]>> {
    const user = UserModel;
    return this.http.post(this.getEndPoint('create'), user);
  }

  editUser(id: number, UserModel: ICreateUser): Observable<ICommonResponseModel<IuserModel[]>> {
    const user = UserModel;
    return this.http.put(this.getEndPoint(`update/${id}`), user);
  }

}

