import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-marketplace-info',
    templateUrl: './marketplace-info.component.html',
    styleUrls: ['./marketplace-info.component.scss'],
})
export class MarketplaceInfoComponent implements OnInit {
    @Input() data: any;
    products: any[] = [1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 2];

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
        console.log(this.data);
    }

    goBack() {
        this.modalCtrl
            .dismiss();
    }

}
