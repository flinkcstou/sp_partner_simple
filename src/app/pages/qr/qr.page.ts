import { Component, OnInit } from '@angular/core';
import { QrService } from '../../services/qr.service';
import { NavController } from '@ionic/angular';
import {LoadingService} from "../../services/loading.service";

@Component({
    selector: 'app-qr',
    templateUrl: './qr.page.html',
    styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

    constructor(private qrService: QrService,
                private navController: NavController,
                private loadingService: LoadingService) {

    }

    ngOnInit() {
    }

    scanner() {
        // this.loadingService.present();
        this.qrService.scanner();
        // this.loadingService.dismiss();
    }

    back() {
        this.navController.back();
    }
}
