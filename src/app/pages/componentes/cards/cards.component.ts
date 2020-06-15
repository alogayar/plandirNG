import { Component } from '@angular/core';
import { ComponentesService } from '../../services/componentes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent {

  html:any; 
  
  constructor(private service: ComponentesService) {    
    this.service.init('cards').subscribe(data=>this.html = data);
    
  }

  

}
