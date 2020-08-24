import { Component, OnInit } from '@angular/core';
import { ComponentesService } from '../../services/componentes.service';
import { Car } from '../dataview/dataview.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  cars: Car[];

  constructor(private http: ComponentesService) { }

  ngOnInit() {
    this.http.getCars().then(cars => this.cars = cars);
  }



}
