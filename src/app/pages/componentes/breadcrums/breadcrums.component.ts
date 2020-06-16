import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-breadcrums',
  templateUrl:'./breadcrums.component.html',  
  styles: []
})
export class BreadcrumsComponent implements OnInit {
  items: MenuItem[];
  constructor() { }
  
  ngOnInit() {
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
