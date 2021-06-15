import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {StorageLocalService} from '../../services/storage-local.service';
import {SpPartnerHeader} from '../../models/commons/SpPartnerHeader';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-transaction-info',
    templateUrl: './transaction-info.component.html',
    styleUrls: ['./transaction-info.component.scss'],
})
export class TransactionInfoComponent implements OnInit {
    @Input() data: any;
    brand: any;
    spPartnerHeader: SpPartnerHeader = SpPartnerHeader.WITH_TITLE_BACK('ASD');
    userPhotoUrl: string = environment.apiUrl + '/users/api/v1/file/avatar/';

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
