import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styles: [
  ]
})
export class SectionHeaderComponent implements OnInit {
  
  @Input() textsubheader: string;
  url:string;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.data.subscribe(data => (this.url = data['url']));
  }

  ngOnInit(): void {
  }

}
