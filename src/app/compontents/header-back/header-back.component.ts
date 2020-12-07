import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent{

  @Input() title: string = '';
  // @Input() hasBackButton: string = 'false';

  constructor() {
  }

  // ngOnInit() {
  //   console.log(this.title);
  //   // console.log(this.hasBackButton);
  // }

}
