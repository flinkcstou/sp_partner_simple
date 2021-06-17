import {Component, OnInit} from '@angular/core';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';
import {UserService} from '../../../../services/user.service';
import {ToastService} from '../../../../services/controllers/toast.service';
import {MarketplaceService} from '../../../../services/marketplace.service';
import {ModalService} from '../../../../services/controllers/modal.service';

@Component({
    selector: 'app-marketplace',
    templateUrl: './marketplace.page.html',
    styleUrls: ['./marketplace.page.scss'],
})
export class MarketplacePage implements OnInit {
    spPartnerHeader: SpPartnerHeader = SpPartnerHeader.WITH_TITLE_BACK('Marketplace');
    phone: string = '';
    search: string = '';
    qrCode: string = '';
    transactions: any[] = [
        {
            id: 1,
            status: 1,
            userName: 'abyl',
            time: '21.04.2021 18:00 - 20:00',
        }
    ];

    constructor(private userService: UserService,
                private toastService: ToastService,
                private marketplaceService: MarketplaceService,
                private modalService: ModalService) {
    }

    ngOnInit() {
        this.getTransactions();
    }

    getTransactions() {
        console.log('getAllTransactions');
    }

    searchOrders() {
        if (this.phone.length > 9 || this.qrCode.length > 7) {
            const phoneSearchStr = '7' + this.phone;
            this.userService.getUserByQrOrPhone(phoneSearchStr, this.qrCode).toPromise()
                .then(response => {
                    console.log(response);
                    this.search += ',userId:' + response.id;
                    // this.getTransactions();
                }).catch(async error => {
                console.log(error);
                await this.toastService.present(error ? error : 'Ошибка!', 'danger');
            });
        }
    }

    reloadPage() {
        this.search = '';
        this.phone = '';
        this.qrCode = '';
        // this.getTransactions();
    }


    goToTransaction(transaction: any) {
        if (this.modalService.isPresent) {
            this.modalService.dismiss();
        } else {
            this.modalService.setMarketplaceInfoOption(transaction);
            this.modalService.present();
        }
    }
}
