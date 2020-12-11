import { Injectable } from '@angular/core';
import {OrderServiceController} from '../controllers/order.service.controller';

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
}
