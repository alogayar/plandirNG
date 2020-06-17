import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-breadcrums',
  templateUrl:'./breadcrums.component.html',  
  styles: []
})
export class BreadcrumsComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  constructor() { }
  
  ngOnInit() {
    this.items = [
      {label:'Buscador contribuyentes'},
      {label:'Informacion del contribuyente '},
      {label:'Expedientes'},
      {label:'Informacion del expediente'},
    
  ];
  this.home = {icon: 'fas fa-home'};

  }

}
