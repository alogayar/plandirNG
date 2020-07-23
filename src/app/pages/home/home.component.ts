import { ComponentesService } from 'src/app/pages/services/componentes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  texto:any;
  librerias:any;

  constructor(private service: ComponentesService) {
    this.texto = "PlandirNG es el template o plantilla general de estilos CSS que se ha desarrollado para el Plan director"

  }

  ngOnInit(): void {
    this.service.getDependencies().then( data => { this.librerias = data; console.log(data) });
  }
}
