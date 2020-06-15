import { Component, OnInit, Input } from "@angular/core";
import { ComponentesService } from "src/app/pages/services/componentes.service";

@Component({
  selector: "app-section-html",
  styles:['pre{font-size:12px}'],
  template: `
  <div class="container-fluid" *ngIf="textcss">
    <p-tabView>
      <p-tabPanel header="Sass" leftIcon="fab fa-sass">
        <pre class="ui-corner-all"><code class="language-css" pCode>{{textcss}}</code></pre>       
      </p-tabPanel>
      <p-tabPanel header="css" leftIcon="pi pi-inbox">
          Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
      </p-tabPanel>  
    </p-tabView>   
  </div>

  `,
  
})
export class SectionHtmlComponent implements OnInit {
  textcss: any;
  css: any;
  @Input() tipo: string;
  constructor(private service: ComponentesService) {}

  ngOnInit() {
    this.getSassCode(this.tipo);
  }

  getSassCode(type: string) {
    console.log(type);
    this.service.init(type).subscribe((data) => {this.textcss = data});   
       
  }
}
