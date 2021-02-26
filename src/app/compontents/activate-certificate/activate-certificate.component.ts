import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-activate-certificate',
  templateUrl: './activate-certificate.component.html',
  styleUrls: ['./activate-certificate.component.scss'],
})
export class ActivateCertificateComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalCtrl
        .dismiss('close');
  }
}
