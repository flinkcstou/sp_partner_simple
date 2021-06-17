import { Injectable } from '@angular/core';
import {UserServiceController} from '../controllers/user.service.controller';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  constructor(private userServiceController: UserServiceController) {

  }

  getUserByQrOrPhone(phone: string, qr: string) {
    return this.userServiceController.getUserByQrAndPhone(phone, qr);
  }

  getUserByQr(qr: string) {
    return this.userServiceController.getUserByQr(qr);
  }

  activateCertificateByQr(qr: string) {
    return this.userServiceController.activateCertificateByQr(qr);
  }

  getCertificateByQr(qr: string) {
    return this.userServiceController.getCertificateByQr(qr);
  }
}
