import { Component, OnInit, Input } from '@angular/core';
import { ComponentesService } from 'src/app/pages/services/componentes.service';
import 'prismjs/components/prism-sql.js';

@Component({
  selector: 'app-section-html',
  template: `
  
  
    <pre><code class="language-css">{{css}}</code></pre>
  
     
    
  
  `,
  styles: []
})
export class SectionHtmlComponent implements OnInit {

  textcss: any;
  css:any;
  @Input() tipo: string;
  constructor(private service: ComponentesService) {

  }

  ngOnInit() {
    this.getSassCode(this.tipo);
    
  }

  getSassCode(type: string) {
    console.log(type);
    this.service.init(type).subscribe((data) => {this.textcss = data;this.quitarComillas();console.log(this.css);
    });
  }
  quitarComillas(){
    this.css = this.textcss.split(";");
  }

  



}
