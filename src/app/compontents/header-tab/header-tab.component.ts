import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlertController, IonRouterOutlet, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {SpPartnerHeader} from '../../models/commons/SpPartnerHeader';

@Component({
    selector: 'app-header-tab',
    templateUrl: './header-tab.component.html',
    styleUrls: ['./header-tab.component.scss'],
})
export class HeaderTabComponent {
    brand: any;
    spPartnerHeader: SpPartnerHeader = {};
    @Input() route: string = undefined;

    @Input()
    public set header(value: SpPartnerHeader) {
        this.spPartnerHeader = value;
    }

    @Output() onFinishAction: EventEmitter<any> = new EventEmitter<any>();


    constructor(private navCtrl: NavController,
                private ionRouterOutlet: IonRouterOutlet,
                private router: Router,
                private authService: AuthService,
                private alertController: AlertController) {
    }


    async logout() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Выход',
            // subHeader: 'Выход',
            message: 'Хотите выйти из аккаунта',
            buttons: [
                {
                    text: 'Нет',
                    role: 'cancel',
                    handler: () => {
                    },
                }, {
                    text: 'Да',
                    handler: () => {
                        console.log('Confirm Ok');
                        this.authService.logout();
                    },
                }],
        });
        await alert.present();

        // this.authService.logout();
        // this.navCtrl.navigateForward(['/tabs/main'], {animated: false});
    }

    goBack() {
        if (!!this.route) {
            this.navCtrl.navigateBack([this.route]);
            return;
        }
        this.navCtrl.back({animated: true});
    }

    goToNotifications() {
        console.log('go to notif');
    }

    goToMarketplace() {
        console.log('go to marcetplace');
    }

    finishAction() {
        this.onFinishAction.emit();
    }

    goToOrders() {
        console.log('go to goToOrders');
    }
}
