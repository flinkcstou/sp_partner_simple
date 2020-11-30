import {Injectable, ViewChild} from '@angular/core';
import { QrServiceContrller } from '../controllers/qr.service.contrller';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {QrScannerComponent} from "angular2-qrscanner";

@Injectable({
  providedIn: 'root'
})
export class QrService {

  isApp = false;
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;
  constructor(private qrScanner: QRScanner,
              private barcodeScanner: BarcodeScanner,
              private platform: Platform,
              public modalController: ModalController,
              private qrServiceController: QrServiceContrller) {
    this.isApp = (!document.URL.startsWith('http://localhost:4200'));
  }

  qrPost(qrRequest: any) {
    return this.qrServiceController.qrPost(qrRequest);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();

  }



  scanner() {
    if (this.isApp) {
      this.barcodeScanner.scan({
        preferFrontCamera: true,
        showFlipCameraButton: true,
        showTorchButton: true,
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats: 'QR_CODE', // default: all but PDF_417 and RSS_EXPANDED
        prompt: '',
        disableAnimations: true, // iOS
        disableSuccessBeep: true// iOS and Android
      }).then(async (barcodeData) => {
        console.error('barcodeData', barcodeData);
        await this.qrPost(barcodeData).toPromise().then();
      }).catch(err => {
        console.error('error', err);
      });
    } else {
      this.qrPost('test test test')
        .toPromise()
        .then()
        .finally(() => {
          this.presentModal();
        });
    }
  }

}
