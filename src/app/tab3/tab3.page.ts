import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  images:any;
  constructor() {
    this.images=[
      { id:1, img:'bg-cover'},
      { id:1, img:'bg-page'},
      { id:1, img:'hedgetrimming'},
      { id:1, img:'MoneyLawn'}
    ]
  }


}
