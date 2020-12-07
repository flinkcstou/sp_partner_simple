import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {StorageLocalService} from '../../services/storage-local.service';

@Component({
    selector: 'app-transaction-info',
    templateUrl: './transaction-info.component.html',
    styleUrls: ['./transaction-info.component.scss'],
})
export class TransactionInfoComponent implements OnInit {
    @Input() data: any;
    brand: any;

    constructor(private modalCtrl: ModalController,
                private storageLocalService: StorageLocalService) {
    }

    ngOnInit() {
        console.log(this.data);
        this.brand = this.storageLocalService.getBrand();
        // console.log(this.componentProps);
    }

    goBack() {
        this.modalCtrl
            .dismiss();
    }

    return() {

    }
}
