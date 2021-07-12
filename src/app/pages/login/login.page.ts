import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NavController} from '@ionic/angular';
import {AuthRequest} from '../../models/requests/auth-request';
import {environment} from '../../../environments/environment';
import {LoadingService} from '../../services/loading.service';
import {ToastService} from '../../services/controllers/toast.service';
import {StorageLocalService} from '../../services/storage-local.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user: AuthRequest = {} as AuthRequest;
    logoPath: string = 'assets/spp_logo.png';

    constructor(private authService: AuthService,
                private loadingService: LoadingService,
                private navCtrl: NavController,
                private toastService: ToastService,
                private storageLocalService: StorageLocalService) {
    }

    ngOnInit() {
        this.storageLocalService.removeAll();
    }

    async login() {
        await this.loadingService.present();
        await this.authService.login(this.user).toPromise()
            .then(resp => {
                console.log(resp);
                this.storageLocalService.setApiToken(resp.token);
                this.storageLocalService.setRole(resp.role);
                this.storageLocalService.setBrand(resp.brand);
                this.storageLocalService.setCityId(resp.brand.cities[0].id);
                this.navCtrl.navigateForward(['/tabs/home-tab']);
            }).catch(async error => {
                console.log(error);
                await this.toastService.present('Логин или пароль введены не верно!', 'danger');
            })
            .finally(async () => await this.loadingService.dismiss());
    }
}
