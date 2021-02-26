import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {StorageLocalService} from '../../services/storage-local.service';
import {ToastService} from '../../services/controllers/toast.service';
import {OrderService} from '../../services/order.service';
import {OrderMobileRequest} from '../../models/requests/order-mobile-request';
import {ModalService} from '../../services/controllers/modal.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit, OnDestroy {
  numbers: any = [{value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
    {value: '6'},
    {value: '7'},
    {value: '8'},
    {value: '9'},
  ];
  totalValue: string = '0';
  category: any = null;

  constructor(private navCtrl: NavController,
              private storageLocalService: StorageLocalService,
              private toastService: ToastService,
              private orderService: OrderService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.category = this.storageLocalService.getCategory();
    if (!this.category) {
      this.toastService.present('Не выбран категорий', 'warning');
      this.navCtrl.navigateRoot(['/tabs/qr'])
    }
  }

  ngOnDestroy() {
    this.storageLocalService.removeCategory();
  }

  addNumber(number: any) {
    if (this.totalValue === '0') {
      this.totalValue = number;
    } else {
      this.totalValue += number;
    }
    }

  removeNumber() {
    if (this.totalValue.length > 1) {
      this.totalValue = this.totalValue.substring(0, this.totalValue.length - 1);
    } else if (this.totalValue !== '0') {
      this.totalValue = '0';
    }
  }
    clearValue() {
        this.totalValue = '0';
    }

  generateQr() {
    console.log(this.category);
    console.log(this.totalValue);
    const orderMobileRequest: OrderMobileRequest = {
      categoryId: this.category.id,
      sum: this.totalValue,
    }
    this.orderService.initTransaction(orderMobileRequest).subscribe(data => {
      console.log(data);
      this.openTransactionQr(data);
    },error => {
      console.error(error);
    });
  }
  openTransactionQr(qr: any) {
    this.modalService.setQrPhotoOption(qr);
    this.modalService.present().then(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }

  goBack() {
    this.navCtrl.back({animated: true});
  }
}
