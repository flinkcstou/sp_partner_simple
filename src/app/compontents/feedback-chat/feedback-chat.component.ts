import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-feedback-chat',
  templateUrl: './feedback-chat.component.html',
  styleUrls: ['./feedback-chat.component.scss'],
})
export class FeedbackChatComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  test() {
    this.modalCtrl
        .dismiss();
  }

}
