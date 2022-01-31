import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './demo/demo.component';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { DummyComponent } from './dummy/dummy.component';
import { DialogComponent } from './dialog/dialog.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LoginGuardService } from '../member/login-guard.service';
const Route: Routes = [
  { path: 'calendar', component: DemoComponent , canActivate: [LoginGuardService]}
]

@NgModule({
  declarations: [
    DemoComponent,
    DummyComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FlatpickrModule.forRoot(),
    NgbModalModule,
    FormsModule,
    RouterModule.forChild(Route),
    MatDialogModule,
    MatDividerModule,
    OwlNativeDateTimeModule,
    OwlDateTimeModule
  ],
  exports: [DemoComponent]
})
export class CalendarsModule { }
