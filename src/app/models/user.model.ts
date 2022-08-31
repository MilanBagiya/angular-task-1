export interface IuserModel {
  id: number,
  employee_name: string,
  employee_salary: number,
  employee_age: number,
  profile_image: string
}

export class ICommonResponseModel<T> {
  data?: T;
  statusCode?: number;
  status?: boolean;
  message?: string;
}

export interface ICreateUser {
  name: string,
  salary: number,
  age: number,
  id: number
}