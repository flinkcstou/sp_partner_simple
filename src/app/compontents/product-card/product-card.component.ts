import {Component, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
    @Input() product: any;
    @Input() editProduct: boolean;
    imgUrl: string = environment.apiUrl + '/mp/products/photos/';

    constructor() {
    }

    ngOnInit() {
        console.log(this.product);
        console.log(this.editProduct);
    }

    plusAmount() {
        this.product.orderedProduct.productCount++;
    }

    minusAmount() {
        if (this.product.orderedProduct.productCount > 0) {
            this.product.orderedProduct.productCount--;
        }
    }
}
