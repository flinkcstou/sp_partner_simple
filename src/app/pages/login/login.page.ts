import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NavController} from '@ionic/angular';
import {AuthRequest} from '../../models/requests/auth-request';
import {environment} from '../../../environments/environment';
import {LoadingService} from '../../services/loading.service';
import {ToastService} from '../../services/controllers/toast.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user: AuthRequest = {} as AuthRequest;
    logoPath: string = 'assets/sp_logo.jpg';

    constructor(private authService: AuthService,
                private loadingService: LoadingService,
                private navController: NavController,
                private toastService: ToastService) {
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
            }).catch(async error => {
                console.log(error);
                await this.toastService.presentError('Логин или пароль введены не верно!');
            })
            .finally(async () => await this.loadingService.dismiss());
    }
}
