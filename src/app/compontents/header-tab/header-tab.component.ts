import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, NavController} from '@ionic/angular';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {IonicHeader} from '../../models/commons/IonicHeader';
import {StorageLocalService} from '../../services/storage-local.service';

@Component({
    selector: 'app-header-tab',
    templateUrl: './header-tab.component.html',
    styleUrls: ['./header-tab.component.scss'],
})
export class HeaderTabComponent {
    brand: any;
    ionicHeaders: IonicHeader[] = [{
        identity: '1',
        title: {
            position: 'center',
            additionalTitle: '',
            title: `Транзакции`,
        },
        backButton: null,
        basket: false,
        search: false,
        route: '/tabs/main',
    }, {
        identity: '2',
        title: {
            position: 'center',
            additionalTitle: '',
            title: 'QR Scanner',
        },
        backButton: 'true',
        basket: true,
        search: false,
        route: '/tabs/qr',
    }, {
        identity: '3',
        title: {
            position: 'center',
            additionalTitle: '',
            title: 'Профиль',
        },
        backButton: null,
        basket: true,
        search: null,
        route: '/tabs/profile',
    }
    ];

    ionicHeader: IonicHeader = null;

    slapSearch: boolean = true;
    canGoBack: boolean = false;

    constructor(private navCtrl: NavController,
                private route: ActivatedRoute,
                private ionRouterOutlet: IonRouterOutlet,
                private router: Router,
                private storageLocalService: StorageLocalService) {
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

    goToOrderPage() {
        this.navCtrl.navigateForward(['/tabs/main'], {animated: false});
    }
}
