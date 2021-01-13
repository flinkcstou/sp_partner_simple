import { Injectable } from '@angular/core';
import {PromoServiceController} from '../controllers/promo.service.controller';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private promoServiceController: PromoServiceController) { }


  getUsersPromo(userId: number) {
    return this.promoServiceController.getActiveUsersPromocodes(userId);
  }

  activateUserPromo(promocode: string, userId: number) {
    const object = {
      promocode, userId
    }
    return this.promoServiceController.activateUserPromocode(object);
  }
}
