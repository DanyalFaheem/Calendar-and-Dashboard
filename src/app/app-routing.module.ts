import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './gridster/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginGuardService } from './member/login-guard.service';
import { LoginComponent } from './member/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  //{ path: 'layout', component: LayoutComponent},
  { path: 'login',
  loadChildren: () => import('./member/member.module').then(m => m.MemberModule)
},
{
  path: 'grid',
  loadChildren: () => import('./gridster/gridster.module').then(m => m.GridModule)
}
// ,{
//   path: 'calendar',
//   loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarsModule)
// }
  //{ path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
