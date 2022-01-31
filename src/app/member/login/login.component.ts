import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { login } from '../login.model';
import * as LoginActions from '../login.action'

import { Store } from '@ngrx/store';
import { LoginService } from '../login.service';

interface AppState {
  login: login
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private store: Store<AppState>, private loginservice: LoginService, private route: Router, private toasterservice: ToastrService) {
    this.login = store.select('login') 
  }
  login!: Observable<login>
  error: string = '';
  obj: any = {}
  user = {
    email: '',
    password: ''
  }
  onSubmit(F: NgForm) {
    this.error = '';
    this.user = {
      email: F.value.email,
      password: F.value.password
    }
    //this.loginservice.token = 'token'
    //this.loginservice.userType = 'User'
    this.loginservice.onLogin(this.user).subscribe(
      (response) => {
        this.obj = response;
        console.log(this.obj.message)
        //pivaco5305@wirese.com (Agent login)
        //this.error = this.obj.message
        this.loginservice.token = this.obj.result.data.token;
        this.loginservice.userType = this.obj.result.data.role;
        localStorage.setItem('token', this.loginservice.token)
        localStorage.setItem('userType', this.loginservice.userType)
        let loginObj = {
          token: this.obj.result.data.token,
          userRole: this.obj.result.data.role
        }
        this.store.dispatch(new LoginActions.Login(loginObj))
        //this.toasterservice.success('', this.error, { positionClass: 'toast-top-right' });
        this.route.navigate([''])
      },
      (error: any) => {
        console.log(error.error.message)
        this.error = error.error.message;
        this.toasterservice.error(this.error)
      })
    console.log(this.user);
  }
}


