import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  id: string = ''
  item: any = {
    checkboxes: [{
      value: ''
    }]
  }
  constructor() { }

  ngOnInit(): void {
    console.log("Checkbox id: ")
    console.log(this.id)
  }

}
