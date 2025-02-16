import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || false;

  constructor() { }

  login() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
  }


  logout() {
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
  }

  isLoggedInUser() {
    return this.isLoggedIn;
  }
  selectedEmployeeId: number | null = null;
  userid:number | null =null;

  setuserId(userid: number) {
    this.userid = userid;
  }
  getuserId() {
    return this.userid;
  }

  setSelectedEmployeeId(employeeId: number) {
    this.selectedEmployeeId = employeeId;
  }

  getSelectedEmployeeId() {
    return this.selectedEmployeeId;
  }
}
