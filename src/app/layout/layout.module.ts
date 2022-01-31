import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../member/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginGuardService } from '../member/login-guard.service';

const Route: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
      declarations: [
        HeaderComponent,
        HomeComponent
      ],
      imports: [
        CommonModule,
        RouterModule.forChild(Route),
  ],
  exports: [
    HeaderComponent
  ]
    })
export class LayoutModule { }
