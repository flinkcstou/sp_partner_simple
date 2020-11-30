import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
    @Input() result: string;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
        console.log(this.result);
    }

    back() {
        this.modalController
            .dismiss();
    }

}
