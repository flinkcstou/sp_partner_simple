import { Injectable } from '@angular/core';
import {OrderServiceController} from '../controllers/order.service.controller';
import {OrderMobileRequest} from '../models/requests/order-mobile-request';
import {ModalService} from './controllers/modal.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private orderServiceController: OrderServiceController) { }

  getOrders(page, size, sortBy, search) {
    return this.orderServiceController.getAllOrders(page, size, sortBy, search);
  }


  getTotalBrandTransactions() {
    return this.orderServiceController.getTotalBrandTransactions();
  }

  saveOrderModule(orderRequest: any) {
    return this.orderServiceController.makeOrderModule(orderRequest);
  }

  initTransaction(orderMobileRequest: OrderMobileRequest) {
    return this.orderServiceController.makeTransactionFromMobile(orderMobileRequest);
  }



  openSocket() {

  }
}
