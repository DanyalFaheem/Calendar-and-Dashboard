import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LayoutModule } from './layout/layout.module';
import { MemberModule } from './member/member.module';
import { GridModule } from './gridster/gridster.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { CalendarsModule } from './calendar/calendar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MemberModule,
    GridModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule adde
    CalendarsModule, NgbModule
  ],
  providers: [
    InterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
