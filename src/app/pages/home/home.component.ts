import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  texto:string;

  constructor() {
    this.texto = "PlandirNG es la hoja de estilos que se ha desarrollado para los componentes del Plan director"
  }

  ngOnInit(): void {}
}
