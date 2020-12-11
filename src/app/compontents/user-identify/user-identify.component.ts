import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {environment} from '../../../environments/environment';
import {StorageLocalService} from '../../services/storage-local.service';

@Component({
    selector: 'app-user-identify',
    templateUrl: './user-identify.component.html',
    styleUrls: ['./user-identify.component.scss'],
})
export class UserIdentifyComponent implements OnInit {
    @Input() data: any;
    logoPath: string = environment.apiUrl + '/partners/api/file/logo/';
    spendBonuses: boolean = false;
    totals: any = {cash: 0, creditCard: 0, bonuses: 0, sum: 1000}

    constructor(private modalCtrl: ModalController,
                private storageLocalService: StorageLocalService) {
        this.logoPath += storageLocalService.getBrand().img_url;
        console.log(this.data);
    }

    ngOnInit() {
    }

    goBack() {
        this.modalCtrl
            .dismiss();
    }

    spendBonusChange() {
        if (this.spendBonuses) {
            if (this.totals.sum > this.data.user.activeBonuses) {
                this.totals.cash = this.totals.sum - this.data.user.activeBonuses;
                this.totals.bonuses = this.totals.sum - this.totals.cash;
            } else if (this.totals.sum < this.data.user.activeBonuses) {
                this.totals.cash = 0
                this.totals.bonuses = this.totals.sum;
            }
        } else {
            this.totals.cash = this.totals.sum;
        }
        console.log(this.totals);
    }

    changeTotalSum() {
        console.log(this.totals);
    }

    pay() {
        console.log(this.totals);
    }
}
