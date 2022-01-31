import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  item: any = {
    country: '',
    timeline: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
