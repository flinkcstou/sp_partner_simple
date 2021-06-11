import {Component, OnInit} from '@angular/core';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';
import {StorageLocalService} from '../../../../services/storage-local.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    spPartnerHeader: SpPartnerHeader = SpPartnerHeader.HOME();
    sketchImg: string = 'almaty.png';
    buttons: any[] = [
        {
            icon: 'loyalty-home.svg',
            text: 'Лояльность',
            link: 'loyalty',
        }, {
            icon: 'services-home.svg',
            text: 'Услуги',
            link: 'services',
        }, {
            icon: 'marketplace-icon.svg',
            text: 'Marketplace',
            link: 'marketplace',
        }, {
            icon: 'certificate.svg',
            text: 'Сертификаты',
            link: 'certificate',
        }
    ];

    constructor(private storageLocalService: StorageLocalService) {
        if (storageLocalService.getCityId() === 3) {
            this.sketchImg = 'shymkent.png';
        }
    }

    ngOnInit() {
    }

    goToPage(link: string) {
        console.log(link);
    }

}