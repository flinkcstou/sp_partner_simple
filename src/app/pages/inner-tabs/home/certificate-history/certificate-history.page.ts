import { Component, OnInit } from '@angular/core';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';
import {LoadingService} from '../../../../services/loading.service';
import {OrderService} from '../../../../services/order.service';
import {ToastService} from '../../../../services/controllers/toast.service';
import {UserService} from '../../../../services/user.service';
import {ModalService} from '../../../../services/controllers/modal.service';

@Component({
  selector: 'app-certificate-history',
  templateUrl: './certificate-history.page.html',
  styleUrls: ['./certificate-history.page.scss'],
})
export class CertificateHistoryPage implements OnInit {
  spPartnerHeader: SpPartnerHeader = SpPartnerHeader.WITH_TITLE_BACK('Сертификаты');
  page: number = 0;
  size: number = 30;
  sortStr: string = 'desk-createdAt';
  search: string = 'type:9';
  pageResponse: any;
  transactions: any[];
  phone: string = '';
  qrCode: string = '';
  loadMore: boolean = false;

  constructor(private loadingService: LoadingService,
              private orderService: OrderService,
              private toastService: ToastService,
              private userService: UserService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.getTransactions();
  }

  async getTransactions() {
    this.page = 0;
    await this.loadingService.present();
    this.orderService.getOrders(this.page, this.size, this.sortStr, this.search).toPromise()
        .then(resp => {
          console.log(resp);
          this.pageResponse = resp;
          this.transactions = resp.content;
        }).catch(error => {
      console.error(error);
      this.toastService.present((error) ? error : 'Ошибка!', 'danger');
    }).finally(async () => await this.loadingService.dismiss());
  }

  reloadPage() {
    this.search = 'type:9';
    this.phone = '';
    this.qrCode = '';
    this.getTransactions();
  }

  searchOrders() {
    if (this.phone.length > 9 || this.qrCode.length > 7) {
      const phoneSearchStr = '7' + this.phone;
      this.userService.getUserByQrOrPhone(phoneSearchStr, this.qrCode).toPromise()
          .then(response => {
            console.log(response);
            this.search += ',userId:' + response.id;
            this.getTransactions();
          }).catch(async error => {
        console.log(error);
        await this.toastService.present(error ? error : 'Ошибка!', 'danger');
      });
    }
  }

  loadMorePage() {
    this.loadMore = true;
    this.page++;
    this.orderService.getOrders(this.page, this.size, this.sortStr, this.search).toPromise()
        .then(resp => {
          this.loadMore = false;
          this.pageResponse = resp;
          resp.content.forEach(element => {
            this.transactions.push(element);
          });
        }).catch(err => {
      console.error(err);
      this.toastService.present(err, 'danger');
    });

  }

  goToTransaction(transaction: any) {
    if (this.modalService.isPresent) {
      this.modalService.dismiss();
    } else {
      this.modalService.setTransactionInfoOption(transaction);
      this.modalService.present();
    }
  }


}
