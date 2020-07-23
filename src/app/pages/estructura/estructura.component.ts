import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styles: [
  ]
})
export class EstructuraComponent implements OnInit {
  texto:string;



  constructor() {
    this.texto = "Proyecto desarrollado con SASS, para crear la plantilla general de estilos CSS que utiliza el Plan director."

   }

  ngOnInit(): void {
  }

}
