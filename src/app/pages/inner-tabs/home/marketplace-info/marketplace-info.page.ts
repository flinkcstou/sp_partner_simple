import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';
import {MarketplaceService} from '../../../../services/marketplace.service';
import {ToastService} from '../../../../services/controllers/toast.service';
import {CallNumber} from '@ionic-native/call-number/ngx';

@Component({
    selector: 'app-marketplace-info',
    templateUrl: './marketplace-info.page.html',
    styleUrls: ['./marketplace-info.page.scss'],
    providers : [CallNumber]
})
export class MarketplaceInfoPage implements OnInit {
    $url: Subscription;
    spPartnerHeader: SpPartnerHeader = SpPartnerHeader.WITH_TITLE_BACK('Marketplace');
    order: any;
    orderId: number;
    products: any[];
    editProducts: boolean = false;

    constructor(private route: ActivatedRoute,
                private marketplaceService: MarketplaceService,
                private toastService: ToastService,
                private callNumber: CallNumber
    ) {
    }

    ngOnInit() {
        this.getMarketplaceOrderInfo();
    }

    getMarketplaceOrderInfo() {
        this.$url = this.route.params.subscribe(data => {
            if (data.id) {
                this.orderId = data.id;
                this.getOrderInfoById();
            }
        });
    }
    getOrderInfoById() {
        this.marketplaceService.getOrderById(this.orderId).toPromise().then(resp => {
            this.order = resp;
            console.log(resp);
            this.products = resp.products;
        }).catch(err => {
            console.log(err);
        });
    }

    editProductsAmount() {
        this.editProducts = true;
    }

    saveProducts() {
        console.log(this.products);
        this.editProducts = false;
        const productsList = [];
        this.products.forEach(element => {
            const productObject = {
                brandId: element.orderedProduct.brand.brandId,
                price: element.orderedProduct.unitPrice,
                productCount: element.orderedProduct.productCount,
                productId: element.orderedProduct.productId,
                userId: element.orderedProduct.userId
            };
            productsList.push(productObject);
        });
        const changeProductsRequest = {
            orderId: this.order.orderId,
            purchaseId: this.order.id,
            products: productsList,
        };
        console.log(changeProductsRequest);
        this.marketplaceService.changeProductsAmount(changeProductsRequest).toPromise().then(resp => {
            console.log(resp);
            this.toastService.present('???????????????????? ?????????????????? ???????????????? ??????????????');
            this.getOrderInfoById();
        }).catch(err => {
            console.error(err);
            this.toastService.present('???????????? ?????? ?????????????????? ????????????????????', 'danger');
        });
    }


    callUser() {
        let phoneNumber = '';
        if (this.order?.deliveryMethod === 'delivery') {
            console.log(this.order.recipient);
            console.log('+' + this.order.recipient?.phoneNumber);
            if (this.order.recipient === null) {
                this.toastService.present('?????? ???????????? ????????????????????????!');
            } else {
                phoneNumber = '+' + this.order.recipient?.phoneNumber;
            }
        } else if (this.order?.deliveryMethod === 'pickup') {
            console.log(this.order.userResponse);
            console.log('+' + this.order.userResponse.phone);
            if (this.order.userResponse?.phone != null) {
                phoneNumber = '+' + this.order.userResponse?.phone;
            }
        }
        if (phoneNumber !== '') {
            this.callNumber.callNumber(phoneNumber, true)
                .then(resp => {
                    console.log(resp)
                }).catch(err => console.log(err));
        }
    }

    acceptOrder() {
        const purchaseInfo = {
            comment: '',
            orderId: this.order.orderId,
            purchaseId: this.order.id
        };
        this.marketplaceService.acceptOrder(purchaseInfo).toPromise().then(resp => {
            console.log(resp);
            this.toastService.present('?????????? ?????????????? ????????????');
            this.getOrderInfoById();
        }).catch(err => {
            console.log(err);
            this.toastService.present('???????????? ?????? ????????????????', 'danger');
        });
    }

    finishOrder() {
        const purchaseInfo = {
            comment: '',
            orderId: this.order.orderId,
            purchaseId: this.order.id
        };
        this.marketplaceService.finishOrder(purchaseInfo).toPromise().then(resp => {
            console.log(resp);
            this.toastService.present('?????????? ?????????????? ????????????????');
            this.getOrderInfoById();
        }).catch(err => {
            console.log(err);
            this.toastService.present('???????????? ?????? ????????????????????', 'danger');
        });
    }

    cancelOrder() {
        const purchaseInfo = {
            comment: '',
            orderId: this.order.orderId,
            purchaseId: this.order.id
        };
        this.marketplaceService.cancellOrder(purchaseInfo).toPromise().then(resp => {
            console.log(resp);
            this.toastService.present('?????????? ?????????????? ????????????????');
            this.getOrderInfoById();
        }).catch(err => {
            console.log(err);
            this.toastService.present('???????????? ?????? ????????????????????', 'danger');
        });
    }
}
