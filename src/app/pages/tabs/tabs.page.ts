import {Component, ViewChild} from '@angular/core';
import {IonicTab} from '../../models/commons/IonicTab';
import {IonTabs} from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
    @ViewChild('ionTabs') ionTabs: IonTabs;

    HOME_TAB = 'home-tab';
    STATISTICS_TAB = 'statistics-tab';
    SCANNER_TAB = 'scanner-tab';
    CHAT_TAB = 'chat-tab';
    PROFILE_TAB = 'profile-tab';
    tabs: IonicTab[] = [];
    list: string[] = [
        this.HOME_TAB,
        this.STATISTICS_TAB,
        this.SCANNER_TAB,
        this.CHAT_TAB,
        this.PROFILE_TAB,
    ];
    selected: string = '';

    constructor() {
    }

    ionTabsWillChange(event: any) {
        this.selected = this.list.filter(tab => tab === event?.tab)[0];
    }
}
