import { Injectable } from '@angular/core';
import {OrderServiceController} from '../controllers/order.service.controller';
import {CategoryServiceController} from '../controllers/category.service.controller';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  fullUrl = environment.apiUrl + '/partners/api/brand/categories';

  constructor(
              private httpClient: HttpClient) { }



  getAllCategories() {
    return this.httpClient.get<any> (this.fullUrl + '/module');
  }

  // getOrders(page, size, sortBy, search) {
  //   return this.orderServiceController.getAllOrders(page, size, sortBy, search);
  // }
  //
  //
  // getTotalBrandTransactions() {
  //   return this.orderServiceController.getTotalBrandTransactions();
  // }
}
