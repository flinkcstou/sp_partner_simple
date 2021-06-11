import {Component, OnInit, ViewChild} from '@angular/core';
import {QrService} from '../../../../services/qr.service';
import {ModalController, NavController} from '@ionic/angular';
import {LoadingService} from '../../../../services/loading.service';
import {QrScannerComponent} from 'angular2-qrscanner';
import {CategoryService} from '../../../../services/category.service';
import {environment} from '../../../../../environments/environment';
import {StorageLocalService} from '../../../../services/storage-local.service';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';


@Component({
    selector: 'app-qr',
    templateUrl: './qr.page.html',
    styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
    @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;
    spPartnerHeader: SpPartnerHeader = SpPartnerHeader.WITH_TITLE_BACK('Лояльность');
    categories: any[] = [];
    imageUrl: any = environment.apiUrl + '/partners/api/file/category/';
    promoUrl: any = 'assets/promo-image.png';


    constructor(private qrService: QrService,
                private navController: NavController,
                private categoryService: CategoryService,
                private modalController: ModalController,
                private loadingService: LoadingService,
                private storageLocalService: StorageLocalService) {

    }

    ngOnInit() {
        this.getAllBrandCategoreis();
    }

    getAllBrandCategoreis() {
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = [];
            data.forEach(category => {
                if (category.id !== 15 && category.id !== 16) {
                    this.categories.push(category);
                }
            });
        }, error => {
            console.error(error);
        });
    }

    back() {
        this.navController.back();
    }

    goToQr(category: any) {
        this.storageLocalService.setCategory(category);
        this.navController.navigateForward(['/transaction']);
        // this.qrService.scanner('purchase', category);
    }

    // turnCamera() {
    //     this.qrScannerComponent.getMediaDevices().then(devices => {
    //         const videoDevices: MediaDeviceInfo[] = [];
    //         for (const device of devices) {
    //             if (device.kind.toString() === 'videoinput') {
    //                 videoDevices.push(device);
    //             }
    //         }
    //         if (videoDevices.length > 0) {
    //             let choosenDev;
    //             for (const dev of videoDevices) {
    //                 if (dev.label.includes('front')) {
    //                     choosenDev = dev;
    //                     break;
    //                 }
    //             }
    //             if (choosenDev) {
    //                 console.log(choosenDev);
    //                 this.qrScannerComponent.chooseCamera.next(choosenDev);
    //             } else {
    //                 this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
    //             }
    //         }
    //     });
    // }

    // startScan() {
    //     this.turnCamera();
    //     this.qrScannerComponent.capturedQr.subscribe(result => {
    //         console.log(result);
    //         //TODO
    //         // this.presentProfileModal(result);
    //         // this.isStopped = false;
    //     });
    // }

}
