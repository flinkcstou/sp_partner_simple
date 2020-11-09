import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';
import { AuthRequest } from '../../models/requests/auth-request';
import { environment } from '../../../environments/environment';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user: AuthRequest = {} as AuthRequest;

    constructor(private authService: AuthService,
                private loadingService: LoadingService,
                private navController: NavController) {
    }

    ngOnInit() {
    }

    async login() {
        await this.loadingService.present();
        await this.authService.login(this.user).toPromise()
            .then(resp => {
                console.log(resp);
                localStorage.setItem(environment.token, resp.token);
                this.navController.navigateForward(['/qr']);
            })
            .finally(async () => await this.loadingService.dismiss());
    }
}
