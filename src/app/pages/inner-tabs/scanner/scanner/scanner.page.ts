import {Component, OnInit} from '@angular/core';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';
import {StorageLocalService} from '../../../../services/storage-local.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-scanner',
    templateUrl: './scanner.page.html',
    styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
    spPartnerHeader: SpPartnerHeader = SpPartnerHeader.HOME();
    sketchImg: string = 'almaty.png';
    buttons: any[] = [
        {
            icon: 'loyalty-home.svg',
            text: 'Лояльность',
            link: 'tabs/scanner-tab/qr',
        }, {
            icon: 'certificate.svg',
            text: 'Сертификаты',
            link: 'certificate',
        }
    ];

    constructor(private storageLocalService: StorageLocalService,
                private navCtrl: NavController,
    ) {
        if (storageLocalService.getCityId() === 3) {
            this.sketchImg = 'shymkent.png';
        }
    }

    ngOnInit() {
    }

    goToPage(link: string) {
        console.log(link);
        this.navCtrl.navigateForward([link]);
    }

}
