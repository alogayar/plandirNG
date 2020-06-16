import { Component, OnInit, Input } from "@angular/core";
import { ComponentesService } from "src/app/pages/services/componentes.service";

@Component({
  selector: "app-section-html",
  styles:['pre{font-size:12px}'],
  template: `
  <div class="container-fluid" *ngIf="textcss">
         
        <pre class="ui-corner-all"><code class="language-css" pCode>{{textcss}}</code></pre>       
    
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
