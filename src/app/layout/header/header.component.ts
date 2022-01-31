import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/member/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginservice: LoginService) { }
  get Loginservice() {
    return this.loginservice;
  }
  ngOnInit(): void {
  }
}
