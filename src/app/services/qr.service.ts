import { Injectable } from '@angular/core';
import { QrServiceContrller } from '../controllers/qr.service.contrller';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';

@Injectable({
    providedIn: 'root'
})
export class QrService {

    isApp = false;

    constructor(private qrScanner: QRScanner,
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
            this.qrScanner.prepare()
                .then(status => {
                    return this.qrScanner.useFrontCamera();
                })
                .then((status: QRScannerStatus) => {
                    if (status.authorized) {
                        // camera permission was granted

                        // start scanning
                        const scanSub = this.qrScanner.scan().subscribe(async (text: string) => {

                            await this.qrPost(text).toPromise().then();

                            console.log('Scanned something', text);

                            this.qrScanner.hide(); // hide camera preview
                            scanSub.unsubscribe(); // stop scanning
                        });

                    } else if (status.denied) {
                        // camera permission was permanently denied
                        // you must use QRScanner.openSettings() method to guide the user to the settings page
                        // then they can grant the permission from there
                    } else {
                        // permission was denied, but not permanently. You can ask for permission again at a later time.
                    }
                })
                .catch((e: any) => {
                    console.log('Error is', e);
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
