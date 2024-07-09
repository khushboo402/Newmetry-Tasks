import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUser: any = null;

  constructor() { }

  loginUser(user: any) {
    this.loggedInUser = user;
  }

  logoutUser() {
    this.loggedInUser = null;
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }
}
