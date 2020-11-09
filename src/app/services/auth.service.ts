import { Injectable } from '@angular/core';
import { AuthServiceController } from '../controllers/auth.service.controller';
import { AuthRequest } from '../models/requests/auth-request';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private authController: AuthServiceController) {
    }

    login(authRequest: AuthRequest) {
        return this.authController.login(authRequest);
    }
}
