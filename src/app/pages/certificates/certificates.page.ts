import {Component, OnInit} from '@angular/core';
import {QrService} from '../../services/qr.service';

@Component({
    selector: 'app-certificates',
    templateUrl: './certificates.page.html',
    styleUrls: ['./certificates.page.scss'],
})
export class CertificatesPage implements OnInit {
    promoUrl: any = 'assets/promo-image.png';
    certificateUrl: any = 'assets/certificate.jpg';

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
