import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {environment} from '../../../environments/environment';
import {StorageLocalService} from '../../services/storage-local.service';
import {OrderService} from '../../services/order.service';
import {ToastService} from '../../services/controllers/toast.service';

@Component({
    selector: 'app-user-identify',
    templateUrl: './user-identify.component.html',
    styleUrls: ['./user-identify.component.scss'],
})
export class UserIdentifyComponent implements OnInit {
    @Input() data: any;
    logoPath: string = environment.apiUrl + '/partners/api/file/logo/';
    spendBonuses: boolean = false;
    totals: any = {cash: 0, creditCard: 0, bonuses: 0, sum: ''}

    constructor(private modalCtrl: ModalController,
                private storageLocalService: StorageLocalService,
                private orderService: OrderService,
                private toastService: ToastService) {
        this.logoPath += storageLocalService.getBrand().img_url;
    }

    ngOnInit() {
        console.log(this.data);
    }

    goBack() {
        this.modalCtrl
            .dismiss('close');
    }

    spendBonusChange() {
        if (this.spendBonuses) {
            if (this.totals.sum > this.data.user.activeBonuses) {
                const cash = this.totals.sum - this.data.user.activeBonuses;
                this.totals.cash = cash.toFixed(2);
                const bonus = this.totals.sum - this.totals.cash;
                this.totals.bonuses = bonus.toFixed(2);
            } else if (this.totals.sum < this.data.user.activeBonuses) {
                this.totals.cash = 0
                this.totals.bonuses = this.totals.sum;
            }
        } else {
            this.totals.bonuses = 0;
            this.totals.cash = this.totals.sum;
        }
        console.log(this.totals);
    }

    changeTotalSum() {
        if (this.totals.sum <= 0) {
            this.totals.sum = '';
        }
        this.spendBonusChange();
    }

    pay() {
        this.totals.bonuses = parseFloat(this.totals.bonuses);
        this.totals.sum = parseFloat(this.totals.sum);
        this.totals.cash = parseFloat(this.totals.cash);
        console.log(this.totals);
        const orderRequest = {
            bonus: this.totals.bonuses,
            cash: this.totals.cash,
            creditCard: this.totals.creditCard,
            orderProducts : [
                {
                    amount: 1,
                    categoryId: this.data.category.id,
                    price: this.totals.sum,
                    productName: this.data.category.name + ' на сумму ' + this.totals.sum + 'тенге.',
                    returnable: true,
                }
            ],
            userId: this.data.user.id,
        }
        console.log(orderRequest);
        this.orderService.saveOrderModule(orderRequest).subscribe( response => {
            console.log(response);
            this.toastService.present('Оплата произведена успешно!');
            this.modalCtrl
                .dismiss(response);
        },error => {
            console.error(error);
            this.toastService.present(error, 'danger');

        });

    }
}
