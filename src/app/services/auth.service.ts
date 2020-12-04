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
                private navController: NavController) {
    }

    login(authRequest: AuthRequest) {
        return this.authController.login(authRequest);
    }
    logout() {
        this.storageLocalService.removeAll();
        this.navController.navigateForward(['/login']);
    }
}
