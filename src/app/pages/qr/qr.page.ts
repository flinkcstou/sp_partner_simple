import { Component, OnInit } from '@angular/core';
import { QrService } from '../../services/qr.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-qr',
    templateUrl: './qr.page.html',
    styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

    constructor(private qrService: QrService,
                private navController: NavController) {

    }

    ngOnInit() {
    }

    scanner() {
        this.qrService.scanner();
    }

    back() {
        this.navController.back();
    }
}
