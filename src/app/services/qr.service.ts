import {Injectable, ViewChild} from '@angular/core';
import {QrServiceController} from '../controllers/qr.service.controller';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';
import {ModalController, Platform} from '@ionic/angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {QrScannerComponent} from 'angular2-qrscanner';
import {UserService} from './user.service';
import {ModalService} from './controllers/modal.service';
import {ToastService} from './controllers/toast.service';

@Injectable({
    providedIn: 'root',
})
export class QrService {

    isApp = false;
    @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

    constructor(private qrScanner: QRScanner,
                private barcodeScanner: BarcodeScanner,
                private platform: Platform,
                public modalController: ModalController,
                private qrServiceController: QrServiceController,
                private userService: UserService,
                private modalService: ModalService,
                private toastService: ToastService) {
        this.isApp = (!document.URL.startsWith('http://localhost:4200'));
    }

    qrPost(qrRequest: any) {
        return this.qrServiceController.qrPost(qrRequest);
    }


    identify(qrCode: any) {
        return this.userService.getUserByQr(qrCode);
    }

    testScan() {
        if (this.isApp) {
            this.barcodeScanner.scan({
                preferFrontCamera: false,
                showFlipCameraButton: true,
                showTorchButton: true,
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats: 'QR_CODE', // default: all but PDF_417 and RSS_EXPANDED
                prompt: '',
                disableAnimations: true, // iOS
                disableSuccessBeep: true,// iOS and Android
            }).then(async (barcodeData) => {
                await this.identify(barcodeData.text).toPromise().then(response => {
                    this.openPromoActivateModal(response);
                }).catch(error => {
                    console.error(error);
                    this.toastService.present(error, 'danger');
                });
                // await this.qrPost(barcodeData).toPromise().then();
            }).catch(err => {
                console.error('error', err);
            });
        } else {
            console.log('this is web');
            this.identify('12345678')
                .toPromise()
                .then(response => {
                    this.openPromoActivateModal(response);
                }).catch(error => {
                console.error(error);
                this.toastService.present(error, 'danger');
            });
        }
    }

    scanner(category?: any) {
        if (this.isApp) {
            this.barcodeScanner.scan({
                preferFrontCamera: false,
                showFlipCameraButton: true,
                showTorchButton: true,
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats: 'QR_CODE', // default: all but PDF_417 and RSS_EXPANDED
                prompt: '',
                disableAnimations: true, // iOS
                disableSuccessBeep: true,// iOS and Android
            }).then(async (barcodeData) => {
                await this.identify(barcodeData.text).toPromise().then(response => {
                    this.openIdentifyModal(category, response);
                }).catch(error => {
                    console.error(error);
                    this.toastService.present(error, 'danger');
                });
                // await this.qrPost(barcodeData).toPromise().then();
            }).catch(err => {
                console.error('error', err);
            });
        } else {
            this.identify('12345678')
                .toPromise()
                .then(response => {
                    this.openIdentifyModal(category, response);
                }).catch(error => {
                console.error(error);
                this.toastService.present(error, 'danger');
            });
        }
    }

    openIdentifyModal(category, response) {
        const data = {
            category: category,
            user: response,
        };
        this.modalService.setUserIdentifyOption(data);
        this.modalService.present().then(response => {
            console.log(response);
        }, error => {
            console.error(error);
        });
    }

    openPromoActivateModal(response) {
        this.modalService.setActivateUserOption(response);
        this.modalService.present().then(resp => {
            console.log(resp);
        }).catch(error => {
            console.error(error);
        });
    }

}
