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

    HOME_TAB = 'main';
    QR_TAB = 'qr';
    HISTORY_TAB = 'history-tab';
    PROFILE_TAB = 'profile-tab';
    tabs: IonicTab[] = [];
    list: string[] = [
        this.HOME_TAB,
        this.QR_TAB,
        this.HISTORY_TAB,
        this.PROFILE_TAB,
    ];
    selected: string = '';

    constructor() {
    }

    ionTabsWillChange(event: any) {
        this.selected = this.list.filter(tab => tab === event?.tab)[0];
    }
}
