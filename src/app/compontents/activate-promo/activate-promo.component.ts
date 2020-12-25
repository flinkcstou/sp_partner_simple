import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-activate-promo',
    templateUrl: './activate-promo.component.html',
    styleUrls: ['./activate-promo.component.scss'],
})
export class ActivatePromoComponent implements OnInit {
    @Input() data: any;

    constructor() {
    }

    ngOnInit() {
        console.log(this.data);
    }

}
