import {Component, ViewChild} from '@angular/core';
import {IonicTab} from '../../models/commons/IonicTab';
import {IonTabs} from '@ionic/angular';
import {StorageLocalService} from '../../services/storage-local.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
    @ViewChild('ionTabs') ionTabs: IonTabs;

    tabs: IonicTab[] = [
        {
            identity: '1',
            title: 'Main',
            selectedIcon: false,
            icon: 'home-outline',
            route: 'main',
        },
        {
            identity: '2',
            title: 'Statistics',
            selectedIcon: false,
            icon: 'pie-chart-outline',
            route: 'statistics',
        },
        {
            identity: '3',
            title: 'QR',
            selectedIcon: false,
            icon: 'qr-code-outline',
            route: 'qr',
        },
        {
            identity: '4',
            title: 'Certificates',
            selectedIcon: false,
            icon: 'ticket-outline',
            route: 'certificates',
        },
        {
            identity: '5',
            title: 'Profile',
            selectedIcon: false,
            icon: 'person-outline',
            route: 'profile',
            // click: this.goToQr.bind(this)
        },
    ];

    constructor() {
    }

    ionTabsWillChange(event: any) {
        this.tabs.forEach((tab: IonicTab) => {
            tab.selectedIcon = tab.route === event?.tab;
        });
    }
}
