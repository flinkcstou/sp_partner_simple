import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {SpPartnerHeader} from '../../../../models/commons/SpPartnerHeader';
import {MarketplaceService} from '../../../../services/marketplace.service';
import {ToastService} from '../../../../services/controllers/toast.service';

@Component({
    selector: 'app-marketplace-info',
    templateUrl: './marketplace-info.page.html',
    styleUrls: ['./marketplace-info.page.scss'],
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
                private toastService: ToastService
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
            this.order.orderStatus = 0;
            this.products = resp.products;
        }).catch(err => {
            console.log(err);
        });
    }

    editProductsAmount() {
        this.editProducts = true;
    }

    saveProducts() {
        this.editProducts = false;
        const productsList = [];
        this.products.forEach(element => {
            const productObject = {
                brandId: element.orderedProduct.brand.brandId,
                price: element.orderedProduct.unitPrice,
                productCount: element.orderedProduct.productCount,
                productId: element.orderedProduct.id,
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
            this.toastService.present('Количество продуктов изменено успешно');
            this.getOrderInfoById();
        }).catch(err => {
            console.error(err);
            this.toastService.present('Ошибка при изменении количества', 'danger');
        });
    }


    callUser() {
        if (this.order?.deliveryMethod === 'delivery') {
            console.log(this.order.recipient);
            console.log('+' + this.order.recipient.phoneNumber);

        } else if (this.order?.deliveryMethod === 'pickup') {
            console.log(this.order.userResponse);
            console.log('+' + this.order.userResponse.phone);
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
            this.toastService.present('Заказ успешно принят');
            this.getOrderInfoById();
        }).catch(err => {
            console.log(err);
            this.toastService.present('Ошибка при принятии', 'danger');
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
            this.toastService.present('Заказ успешно завершен');
            this.getOrderInfoById();
        }).catch(err => {
            console.log(err);
            this.toastService.present('Ошибка при завершении', 'danger');
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
            this.toastService.present('Заказ успешно отклонен');
            this.getOrderInfoById();
        }).catch(err => {
            console.log(err);
            this.toastService.present('Ошибка при отклонении', 'danger');
        });
    }
}
