import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, NavController} from '@ionic/angular';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {IonicHeader} from '../../models/commons/IonicHeader';

@Component({
    selector: 'app-header-tab',
    templateUrl: './header-tab.component.html',
    styleUrls: ['./header-tab.component.scss'],
})
export class HeaderTabComponent {

    ionicHeaders: IonicHeader[] = [{
        identity: '1',
        title: {
            position: 'center',
            additionalTitle: '',
            title: `Транзакции`,
        },
        backButton: null,
        basket: 'false',
        search: true,
        route: '/main',
    }, {
        identity: '2',
        title: {
            position: 'center',
            additionalTitle: '',
            title: 'QR Scanner',
        },
        backButton: 'true',
        basket: 'false',
        search: false,
        route: '/qr',
    }, {
        identity: '3',
        title: {
            position: 'center',
            additionalTitle: '',
            title: 'Профиль',
        },
        backButton: null,
        basket: 'true',
        search: null,
        route: '/tabs/news-tab',
    }
    // }, {
    //     identity: '4',
    //     title: {
    //         position: 'left',
    //         additionalTitle: '',
    //         title: 'Places',
    //     },
    //     backButton: null,
    //     basket: 'true',
    //     search: null,
    //     route: '/tabs/place-tab',
    // }, {
    //     identity: '5',
    //     title: {
    //         position: 'left',
    //         additionalTitle: '',
    //         title: 'Profile',
    //     },
    //     backButton: null,
    //     basket: 'true',
    //     search: null,
    //     route: '/tabs/profile-tab',
    // }
    ];

    ionicHeader: IonicHeader = null;

    slapSearch: boolean = true;
    canGoBack: boolean = false;

    constructor(private navCtrl: NavController,
                private route: ActivatedRoute,
                private ionRouterOutlet: IonRouterOutlet,
                private router: Router) {
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
        this.navCtrl.navigateForward(['order'], {animated: false});
    }
}
