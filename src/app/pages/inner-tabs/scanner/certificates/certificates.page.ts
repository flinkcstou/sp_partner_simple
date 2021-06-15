import {Component, OnInit} from '@angular/core';
import {QrService} from '../../../../services/qr.service';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';

@Component({
    selector: 'app-certificates',
    templateUrl: './certificates.page.html',
    styleUrls: ['./certificates.page.scss'],
})
export class CertificatesPage implements OnInit {
    promoUrl: any = 'assets/promo-image.png';
    certificateUrl: any = 'assets/certificate.jpg';
    spPartnerHeader: SpPartnerHeader = SpPartnerHeader.WITH_TITLE_BACK('Сертификаты');

    constructor(private qrService: QrService) {
    }

    ngOnInit() {
    }

    activateCertificate() {
        this.qrService.scanner('certificate');
    }

    activatePromo() {
        this.qrService.scanner('promo');

    }

}
