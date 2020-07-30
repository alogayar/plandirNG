import { ComponentesService } from 'src/app/pages/services/componentes.service';
import { Component, OnInit } from '@angular/core';

interface Dependency {
  dependency:string;
  description:string;
  url:string;
  image:string;
  version:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
   
      .filter-container {
        text-align: center;
      }
      .car-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2em;
        border-bottom: 1px solid #d9dad9; 
      }
      .car-details > div {
        display: flex;
        align-items: center;
      }
      .car-details > div img {
        margin-right: 14px;
      }
      .car-detail {
        padding: 0 1em 1em 1em;
        border-bottom: 1px solid #d9dad9;
        margin: 1em;
      }
      .ui-panel-content {
        padding: 1em;
      }
      .dark-theme :host ::ng-deep .car-details,
      .dark-theme :host ::ng-deep .car-detail {
        border-bottom: 1px solid #191919;
      }

      @media (max-width: 1024px) {
        .car-details img {
          width: 75px;
        }
        .filter-container {
          text-align: left;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  texto:any;
  librerias:Dependency[];

  constructor(private service: ComponentesService) {
    this.texto = "PlandirNG es el template o plantilla general de estilos CSS que se ha desarrollado para el Plan director"

  }

  ngOnInit(): void {
    this.service.getDependencies().then( data => { this.librerias = data; console.log(data) });
  }
}
