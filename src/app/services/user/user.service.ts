import { Injectable } from '@angular/core';
import IUser from 'src/app/models/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: IUser;
  constructor() {}

  getUser(): IUser {
    return this.user;
  }

  setUser(user: IUser): void {
    this.user = user;
  }
}
