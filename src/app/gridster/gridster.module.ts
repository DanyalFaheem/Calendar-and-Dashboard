import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { LayoutService } from './layout.service';
import { LayoutComponent } from './layout/layout.component';
import { LayoutItemDirective } from './layout-item.directive';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DatePipe } from './date.pipe';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from '../member/login-guard.service';
import { CovidComponent } from './covid/covid.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';

const routes: Routes = [
  { path: 'grid', component: LayoutComponent, canActivate: [LoginGuardService]}
];

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutItemDirective,
    CheckboxComponent,
    InputComponent,
    DatePipe,
    CovidComponent
  ],
  imports: [
    GridsterModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatExpansionModule,
    CommonModule,
    RouterModule.forChild(routes),
    SelectDropDownModule
  ],
  exports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatExpansionModule

  ],
  providers: [LayoutService],
  bootstrap: [],
  entryComponents: [
    InputComponent,
    CheckboxComponent,
    CovidComponent
  ]
})
export class GridModule { }
