import { Injectable } from '@angular/core';
import {UserServiceController} from '../controllers/user.service.controller';
import {Observable} from 'rxjs';
import {MarketplaceServiceController} from '../controllers/marketplace.service.controller';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  constructor(private marketplaceServiceController: MarketplaceServiceController) {

  }

  getAllOrders(userId?: number) {
    return this.marketplaceServiceController.getAllOrders(userId);
  }

  getOrderById(id: number) {
    return this.marketplaceServiceController.getOrderById(id);
  }

  changeProductsAmount(object: any) {
    return this.marketplaceServiceController.changeProductsAmount(object);
  }

  acceptOrder(object: any) {
    return this.marketplaceServiceController.acceptOrder(object);
  }

  cancellOrder(object: any) {
    return this.marketplaceServiceController.cancellOrder(object);
  }

  finishOrder(object: any) {
    return this.marketplaceServiceController.finishOrder(object);
  }
}
