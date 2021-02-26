import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ModalController} from '@ionic/angular';
import {StorageLocalService} from '../../services/storage-local.service';

@Component({
    selector: 'app-qr-image',
    templateUrl: './qr-image.component.html',
    styleUrls: ['./qr-image.component.scss'],
})
export class QrImageComponent implements OnInit {
    @Input() data: any;
    qrSource: string = `${environment.apiUrl}/orders/api/v1/file/mobileTransaction/`;
    SERVER_URL: string =  `wss://api.smartplaza.kz/orders/chat`;
    ws: WebSocket;
    brand: any;


    constructor(private modalCtrl: ModalController,
                private storageLocalService: StorageLocalService
    ) {
        // this.qrSource;
    }

    ngOnInit() {
        console.log(this.storageLocalService.getBrand());
        this.brand = this.storageLocalService.getBrand();
        console.log(this.data);
        this.qrSource += this.data.qrUrl;
        this.ws = new WebSocket(this.SERVER_URL);
        this.ws.onmessage = (e) => {
            console.log(e);
            console.log(e.data);
        };
    }

    goBack() {
        this.modalCtrl
            .dismiss('close');
    }

    testSocket() {
        this.ws.send(JSON.stringify({
            'bonus': 90,
            'sum': 5690,
            'paymentType': 1,
            'qr_code': 'transaction23transaction578567',
        }));
    }
}
