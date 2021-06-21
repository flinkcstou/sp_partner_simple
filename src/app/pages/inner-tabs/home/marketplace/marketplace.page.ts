import {Component, OnInit} from '@angular/core';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';
import {UserService} from '../../../../services/user.service';
import {ToastService} from '../../../../services/controllers/toast.service';
import {MarketplaceService} from '../../../../services/marketplace.service';
import {ModalService} from '../../../../services/controllers/modal.service';
import {NavController} from '@ionic/angular';
import {LoadingService} from '../../../../services/loading.service';

@Component({
    selector: 'app-marketplace',
    templateUrl: './marketplace.page.html',
    styleUrls: ['./marketplace.page.scss'],
})
export class MarketplacePage implements OnInit {
    spPartnerHeader: SpPartnerHeader = SpPartnerHeader.WITH_TITLE_BACK('Marketplace');
    phone: string = '';
    userId: number = null;
    qrCode: string = '';
    transactions: any[] = [];

    constructor(private userService: UserService,
                private toastService: ToastService,
                private marketplaceService: MarketplaceService,
                private navCtrl: NavController,
                private loadingService: LoadingService,
    ) {
    }

    ngOnInit() {
        this.getTransactions();
    }

    async getTransactions() {
        await this.loadingService.present();
        this.marketplaceService.getAllOrders(this.userId).toPromise().then(resp => {
            console.log(resp);
            this.transactions = resp.purchases;
        }).catch(err => {
            console.log(err);
        }).finally(async () => await this.loadingService.dismiss());
    }

    searchOrders() {
        if (this.phone.length > 9 || this.qrCode.length > 7) {
            const phoneSearchStr = '7' + this.phone;
            this.userService.getUserByQrOrPhone(phoneSearchStr, this.qrCode).toPromise()
                .then(response => {
                    console.log(response);
                    this.userId = response.id;
                    this.getTransactions();
                }).catch(async error => {
                console.log(error);
                await this.toastService.present(error ? error : 'Ошибка!', 'danger');
            });
        }
    }

    reloadPage() {
        this.userId = null;
        this.phone = '';
        this.qrCode = '';
        this.getTransactions();
    }


    goToTransaction(transaction: any) {
        this.navCtrl.navigateForward(['/tabs/home-tab/marketplace/' + transaction.id]);
        // if (this.modalService.isPresent) {
        //     this.modalService.dismiss();
        // } else {
        //     this.modalService.setMarketplaceInfoOption(transaction);
        //     this.modalService.present();
        // }
    }
}
