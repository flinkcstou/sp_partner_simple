import {Component, OnInit} from '@angular/core';
import {StorageLocalService} from '../../services/storage-local.service';
import {OrderService} from '../../services/order.service';
import {ToastService} from '../../services/controllers/toast.service';
import {LoadingService} from '../../services/loading.service';
import {UserService} from '../../services/user.service';
import {Route} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ModalService} from '../../services/controllers/modal.service';

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
    page: number = 0;
    size: number = 100;
    loadMore: boolean = false;
    pageResponse: any;

    constructor(private storageLocalService: StorageLocalService,
                private orderService: OrderService,
                private toastService: ToastService,
                private loadingService: LoadingService,
                private userService: UserService,
                private navCtrl: NavController,
                private modalService: ModalService) {
    }

    ngOnInit() {
        this.brand = this.storageLocalService.getBrand();
        this.readySearch()
        this.getTransactions();
    }

    async getTransactions() {
        this.page = 0;
        await this.loadingService.present();
        this.orderService.getOrders(this.page, this.size, null, this.search).toPromise()
            .then(resp => {
                console.log(resp);
                this.pageResponse = resp;
                this.transactions = resp.content;
            }).catch(error => {
            console.error(error);
            this.toastService.present((error) ? error : 'Ошибка!', 'danger');
        }).finally(async () => await this.loadingService.dismiss());
    }

    readySearch() {
        this.searchFilter = {
            phone: '', qr: '',
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
                console.log(error);
                this.toastService.present(error ? error : 'Ошибка!', 'danger');
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
        // this.readySearch();
        this.getTransactions();
    }

    goToModal(transaction: any) {
        if (this.modalService.isPresent) {
            this.modalService.dismiss();
        } else {
            this.modalService.setTransactionInfoOption(transaction);
            this.modalService.present();
        }
    }

    loadMorePage() {
        this.loadMore = true;
        this.page ++;
        this.orderService.getOrders(this.page, this.size, null, this.search).toPromise()
            .then(resp => {
                this.loadMore = false;
                this.pageResponse = resp;
                resp.content.forEach(element => {
                    this.transactions.push(element);
                })
            }).catch(err => {
            console.error(err);
            this.toastService.present(err, 'danger');
        })

    }
}
