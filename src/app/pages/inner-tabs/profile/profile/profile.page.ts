import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {StorageLocalService} from '../../../../services/storage-local.service';
import {ModalService} from '../../../../services/controllers/modal.service';
import {OrderService} from '../../../../services/order.service';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    spPartnerHeader: SpPartnerHeader = SpPartnerHeader.HOME();
    transactionsObject: any;

    constructor(
        private authService: AuthService,
        private storageLocalService: StorageLocalService,
        private modalService: ModalService,
        private orderService: OrderService,
        private alertController: AlertController) {
    }

    ngOnInit() {
        this.getTotals();
    }

    getTotals() {
        this.orderService.getTotalBrandTransactions().subscribe(response => {
            this.transactionsObject = response;
        });
    }


    async logout() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Выход',
            // subHeader: 'Выход',
            message: 'Хотите выйти из аккаунта',
            buttons: [
                {
                    text: 'Нет',
                    role: 'cancel',
                    handler: () => {
                    },
                }, {
                    text: 'Да',
                    handler: () => {
                        console.log('Confirm Ok');
                        this.authService.logout();
                    },
                }],
        });
        await alert.present();
    }

    goToFeedback() {
        if (this.modalService.isPresent) {
            this.modalService.dismiss();
        } else {
            this.modalService.setFeedbackMessageOption();
            this.modalService.present();
        }
    }
}
