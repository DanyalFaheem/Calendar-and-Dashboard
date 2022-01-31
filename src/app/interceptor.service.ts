import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './member/login.service';
import { catchError, tap } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private loginservice: LoginService, private toasterService: ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedreq = req.clone({
      setHeaders: {
        Authorization: this.loginservice.token
      }
    })
    return next.handle(tokenizedreq).pipe(
      tap(evt => {
        console.log(evt);
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.message)
            this.toasterService.success(evt.body.message, '', { positionClass: 'toast-top-right' });
          }
      }),
      catchError((err: any) => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          try {
            this.toasterService.error('',err.error.message,{positionClass: 'toast-top-right'});
            //this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-bottom-center' });
          } catch (e) {
            this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
          }
        }
        return of(err);
      }));
  }
}
