import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.loginservice.Authenticate()) {
      this.toasterService.warning('Redirecting you to Login page', 'You are not logged in!', { positionClass: 'toast-top-right' });
      this.router.navigate(['/login']);
      return false;
    }
    else if (this.loginservice.Authenticate() && state.url == "/login"){
      this.toasterService.warning('Please logout first', 'You are already logged in!', { positionClass: 'toast-top-right' });
      return false;
    }
    else {
      return true;
    }
  }
  constructor(private router: Router, private loginservice: LoginService, private toasterService: ToastrService) { }
}
