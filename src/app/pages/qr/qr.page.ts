import {Component, OnInit, ViewChild} from '@angular/core';
import {QrService} from '../../services/qr.service';
import {ModalController, NavController} from '@ionic/angular';
import {LoadingService} from '../../services/loading.service';
import {QrScannerComponent} from 'angular2-qrscanner';
import {environment} from '../../../environments/environment';
import {ModalPage} from '../modal/modal.page';
import {retry} from 'rxjs/operators';


@Component({
    selector: 'app-qr',
    templateUrl: './qr.page.html',
    styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
    @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

    constructor(private qrService: QrService,
                private navController: NavController,
                private modalController: ModalController,
                private loadingService: LoadingService) {

    }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }

    turnCamera() {
        this.qrScannerComponent.getMediaDevices().then(devices => {
            const videoDevices: MediaDeviceInfo[] = [];
            for (const device of devices) {
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                let choosenDev;
                for (const dev of videoDevices) {
                    if (dev.label.includes('front')) {
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    console.log(choosenDev);
                    this.qrScannerComponent.chooseCamera.next(choosenDev);
                } else {
                    this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
    }


    scanner() {
        // this.loadingService.present();
        this.qrService.scanner();
        // this.loadingService.dismiss();
    }

    back() {
        this.navController.back();
    }

    startScan() {
        this.turnCamera();
        this.qrScannerComponent.capturedQr.subscribe(result => {
            console.log(result);
            //TODO
            // this.presentProfileModal(result);
            // this.isStopped = false;
        });
    }
}
