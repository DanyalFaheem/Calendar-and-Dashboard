import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  token : string = '';
  userType: string = ''
  user = {
    email: '',
    password: ''
  }
  baseUrl: string = 'http://172.16.63.42:3001'
  constructor(private http: HttpClient, private route: Router, private toasterService: ToastrService) { }
  Authenticate(): boolean {
    if(localStorage.getItem('token')) {
      return localStorage.getItem('token') != '';
    }
    else {
      return false;
    }
  }
  onLogin(user: any) {
    return this.http.post(this.baseUrl + '/login', user)
  }
  get UserType() {
    return localStorage.getItem('userType');
  }
  onLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    this.token = '';
    this.userType = ''
    this.route.navigate([''])
    this.toasterService.success('Logged out Successfully', '', { positionClass: 'toast-top-right' });
  }
}
