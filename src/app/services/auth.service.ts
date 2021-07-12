import { Injectable } from '@angular/core';
import { AuthServiceController } from '../controllers/auth.service.controller';
import { AuthRequest } from '../models/requests/auth-request';
import {StorageLocalService} from './storage-local.service';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private authController: AuthServiceController,
                private storageLocalService: StorageLocalService,
                private navCtrl: NavController) {
    }
    getToken() {
        return this.storageLocalService.getApiToken();
    }

    login(authRequest: AuthRequest) {
        authRequest.deviceToken = this.storageLocalService.getPushToken();
        console.log(authRequest);
        return this.authController.login(authRequest);
    }
    logout() {
        this.storageLocalService.removeAll();
        this.navCtrl.navigateForward(['/login']);
    }

    checkAvailability() {
        return !!this.storageLocalService.getApiToken();
    }
}
