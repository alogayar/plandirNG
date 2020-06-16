import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styles: [
  ]
})
export class InputsComponent implements OnInit {
  private items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Categories'},
      {label:'Sports'},
      {label:'Football'},
      {label:'Countries'},
      {label:'Spain'},
      {label:'F.C. Barcelona'},
      {label:'Squad'},
      {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
  ];
  }

}
