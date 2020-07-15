import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
    <p>
      panel works!
    </p>
  `,
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
