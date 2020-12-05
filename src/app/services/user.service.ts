import { Injectable } from '@angular/core';
import {UserServiceController} from '../controllers/user.service.controller';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userServiceController: UserServiceController) {

  }

  getUserByQrOrPhone(phone: string, qr: string) {
    return this.userServiceController.getUserByQrAndPhone(phone, qr);
  }
}
