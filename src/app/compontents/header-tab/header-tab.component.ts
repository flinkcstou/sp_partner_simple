import {Component, Input, OnInit} from '@angular/core';
import {AlertController, IonRouterOutlet, NavController} from '@ionic/angular';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {IonicHeader} from '../../models/commons/IonicHeader';
import {StorageLocalService} from '../../services/storage-local.service';
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
    ionicHeaders: IonicHeader[] = [
        {
            identity: '1',
            title: {
                position: 'center',
                additionalTitle: '',
                title: `Транзакции`,
            },
            backButton: true,
            basket: true,
            exit: true,
            search: true,
            route: '/tabs/main',
        },
        {
            identity: '2',
            title: {
                position: 'center',
                additionalTitle: '',
                title: 'Оплата',
            },
            backButton: null,
            basket: false,
            exit: false,
            search: false,
            route: '/tabs/qr',
        },
        {
            identity: '3',
            title: {
                position: 'center',
                additionalTitle: '',
                title: 'Сертификаты',
            },
            backButton: null,
            basket: false,
            exit: false,
            search: false,
            route: '/tabs/certificates',
        },
        {
            identity: '4',
            title: {
                position: 'center',
                additionalTitle: '',
                title: 'Профиль',
            },
            backButton: null,
            basket: false,
            exit: true,
            search: null,
            route: '/tabs/profile',
        },
    ];

    ionicHeader: IonicHeader = null;

    @Input()
    public set header(value: SpPartnerHeader) {
        this.spPartnerHeader = value;
    }

    slapSearch: boolean = true;
    canGoBack: boolean = false;

    constructor(private navCtrl: NavController,
                private route: ActivatedRoute,
                private ionRouterOutlet: IonRouterOutlet,
                private router: Router,
                private storageLocalService: StorageLocalService,
                private authService: AuthService,
                private alertController: AlertController) {
        this.brand = this.storageLocalService.getBrand();
        this.ionicHeaders[0].title.title = `Транзакции ${this.brand.title}`;
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
            ).subscribe(
            (event: NavigationEnd) => {
                this.ionicHeaders.forEach((ionicHeader) => {
                    ionicHeader.title.additionalTitle = null;
                    if (ionicHeader.route === window.location.pathname) {
                        ionicHeader.title.additionalTitle = this.getTitleQueryParams();
                        this.ionicHeader = ionicHeader;
                    }
                });
            },
        );
    }

    getTitleQueryParams() {
        return new URLSearchParams(window.location.search).get('title');
    }

    switchSearch() {
        this.slapSearch = !this.slapSearch;
    }

    cancelSearch() {
        this.slapSearch = true;
        // clear data
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

    async goToOrderPage() {

    }
}
