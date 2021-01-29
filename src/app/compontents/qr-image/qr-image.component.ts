import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-qr-image',
  templateUrl: './qr-image.component.html',
  styleUrls: ['./qr-image.component.scss'],
})
export class QrImageComponent implements OnInit {
  @Input() data: any;
  qrSource: string = `${environment.apiUrl}/orders/api/v1/file/mobileTransaction/`;

  constructor(private modalCtrl: ModalController,
              ) {
    // this.qrSource;
  }

  ngOnInit() {
    console.log(this.data);
    this.qrSource += this.data.qrUrl;
  }

  goBack() {
    this.modalCtrl
        .dismiss('close');
  }

}
