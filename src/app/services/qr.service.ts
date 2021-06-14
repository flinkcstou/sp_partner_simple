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

    activateCertificateByQr(qrCode: any) {
        return this.userService.activateCertificateByQr(qrCode);
    }

    getCertificateByQr(qrCode: any) {
        return this.userService.getCertificateByQr(qrCode);
    }

    scanner(type: string, category?: any) {
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
                if (type === 'certificate') {
                    await this.activateCertificateByQr(barcodeData.text).toPromise().then(response => {
                        console.log(response);
                        this.openCertificateActivateModal(response);
                    }).catch(error => {
                        console.error(error);
                        this.toastService.present(error, 'danger');
                    });
                } else {
                    await this.identify(barcodeData.text).toPromise().then(response => {
                        if (type === 'purchase') {
                            this.openTransactionModal(category, response);
                        } else if (type === 'promo') {
                            this.openPromoActivateModal(response);
                        }
                    }).catch(error => {
                        console.error(error);
                        this.toastService.present(error, 'danger');
                    });
                }
            }).catch(err => {
                console.error('error', err);
            });
        } else {
            if (type === 'certificate') {
                this.activateCertificateByQr('90820208').toPromise()
                    .then(response => {
                        this.openCertificateActivateModal(response);
                    }).catch(err => {
                    this.toastService.present(err, 'danger');
                });
            } else {
                this.identify('32361652')
                    .toPromise()
                    .then(response => {
                        if (type === 'purchase') {
                            this.openTransactionModal(category, response);
                        } else if (type === 'promo') {
                            this.openPromoActivateModal(response);
                        }
                    }).catch(error => {
                    console.error(error);
                    this.toastService.present(error, 'danger');
                });
            }
        }
    }

    openTransactionModal(category, response) {
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
        this.modalService.setUserPromoOption(response);
        this.modalService.present().then(resp => {
            console.log(resp);
        }).catch(error => {
            console.error(error);
        });
    }

    openCertificateActivateModal(response) {
        this.modalService.setUserCertificateOption(response);
        this.modalService.present().then(resp => {
            console.log(resp);
        }).catch(error => {
            console.error(error);
        });
    }


}
