import {Injectable, ViewChild} from '@angular/core';
import { QrServiceController } from '../controllers/qr.service.controller';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {QrScannerComponent} from "angular2-qrscanner";
import {UserService} from './user.service';
import {ModalService} from './controllers/modal.service';
import {ToastService} from './controllers/toast.service';

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
              private qrServiceController: QrServiceController,
              private userService: UserService,
              private modalService: ModalService,
              private toastService: ToastService) {
    this.isApp = (!document.URL.startsWith('http://localhost:4201'));
  }

  qrPost(qrRequest: any) {
    return this.qrServiceController.qrPost(qrRequest);
  }


  identify(qrCode: any) {
    return this.userService.getUserByQr(qrCode);
  }


  scanner(category: any) {
    if (this.isApp) {
      this.barcodeScanner.scan({
        preferFrontCamera: false,
        showFlipCameraButton: true,
        showTorchButton: true,
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats: 'QR_CODE', // default: all but PDF_417 and RSS_EXPANDED
        prompt: '',
        disableAnimations: true, // iOS
        disableSuccessBeep: true// iOS and Android
      }).then(async (barcodeData) => {
        console.error('barcodeData', barcodeData);
        await this.identify(barcodeData);
        // await this.qrPost(barcodeData).toPromise().then();
      }).catch(err => {
        console.error('error', err);
      });
    } else {
      this.identify('69139238')
        .toPromise()
        .then( response => {
          const data = {
            category: category,
            user: response,
          }
          this.modalService.setUserIdentifyOption(data);
          this.modalService.present();
        }).catch( error => {
          console.error(error);
          this.toastService.present(error, 'danger');
      });
    }
  }

}
