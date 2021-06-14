import { Component, OnInit } from '@angular/core';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit {
  spPartnerHeader: SpPartnerHeader = SpPartnerHeader.WITH_TITLE_BACK('');
  constructor() { }

  ngOnInit() {
  }

}
