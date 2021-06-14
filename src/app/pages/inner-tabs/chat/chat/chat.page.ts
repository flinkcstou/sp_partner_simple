import { Component, OnInit } from '@angular/core';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';
import {StorageLocalService} from '../../../../services/storage-local.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  spPartnerHeader: SpPartnerHeader = SpPartnerHeader.HOME();
  sketchImg: string = 'almaty.png';
  constructor(private storageLocalService: StorageLocalService,
              private navCtrl: NavController) {
    if (storageLocalService.getCityId() === 3) {
      this.sketchImg = 'shymkent.png';
    }
  }

  ngOnInit() {
  }

  goToChat() {
    this.navCtrl.navigateForward(['tabs/chat-tab/chat-view']);
  }
}
