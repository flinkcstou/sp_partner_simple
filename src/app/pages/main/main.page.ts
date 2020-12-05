import {Component, OnInit} from '@angular/core';
import {StorageLocalService} from '../../services/storage-local.service';
import {OrderService} from '../../services/order.service';
import {ToastService} from '../../services/controllers/toast.service';
import {LoadingService} from '../../services/loading.service';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],

})
export class MainPage implements OnInit {
    brand: any
    transactions: any;
    searchFilter: any;
    search: string = '';

    constructor(private storageLocalService: StorageLocalService,
                private orderService: OrderService,
                private toastService: ToastService,
                private loadingService: LoadingService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.brand = this.storageLocalService.getBrand();
        this.readySearch()
        this.getTransactions();
    }

    async getTransactions() {
        await this.loadingService.present();
        this.orderService.getOrders(0,100, '',this.search).toPromise()
            .then(resp => {
                console.log(resp);
                this.transactions = resp.content;
            }).catch( error => {
                console.error(error);
            this.toastService.present((error) ? error.message : 'Ошибка!', 'danger');
        }).finally(async () => await this.loadingService.dismiss());


    }

    readySearch() {
        this.searchFilter = {
            phone: '', qr: ''
        }
    }

    async searchTransaction() {
        console.log(this.searchFilter);
        if (this.searchFilter.qr !== '' || this.searchFilter.phone !== '') {
            await this.loadingService.present();
            this.userService.getUserByQrOrPhone(this.searchFilter.phone, this.searchFilter.qr).toPromise()
                .then(response => {
                    console.log(response);
                    this.search = 'userId:' + response.id;
                    this.getTransactions();
                }).catch(async error => {
                this.toastService.present(error.error ? error.error.message : 'Ошибка!', 'danger');
            }).finally(async () => await this.loadingService.dismiss());
        } else {
            this.getTransactions();
        }
        // if (this.searchFilter.phone !== null && this.searchFilter.phone !== '') {
        //     this.search = `phone:${this.searchFilter.phone},`;
        // } else {
        //     this.search = '';
        // }
        // if (this.searchFilter.name !== null && this.searchFilter.name !== '') {
        //     this.search != ``
        // }
        // console.log(this.search);

    }

    reloadPage() {
        this.search = '';
        this.getTransactions();
    }

    goToModal(transaction: any) {
        console.log(transaction);
    }
}
