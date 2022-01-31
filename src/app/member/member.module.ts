import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginService } from './login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { LoginReducer } from './login.reducer';
import { LoginGuardService } from './login-guard.service';

const Route: Routes = [
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Route),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule adde
    StoreModule.forRoot({login: LoginReducer})
  ],
  exports: [
  LoginComponent,
  ],
  providers: [LoginService]
})
export class MemberModule { }
