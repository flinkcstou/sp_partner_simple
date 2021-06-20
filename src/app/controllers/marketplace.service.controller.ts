import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MarketplaceServiceController {
    fullUrl = environment.apiUrl + '/mp/orders/v1';

    constructor(private httpClient: HttpClient) {
    }

    getAllOrders(): Observable<any> {
        return this.httpClient.get<any>(this.fullUrl + '/kitchen/purchases?pageNumber=1&pageSize=90000');
    }

    getOrderById(id: number): Observable<any> {
        return this.httpClient.get<any>(this.fullUrl + '/kitchen/purchases/' + id);
    }

    changeProductsAmount(object: any): Observable<any> {
        return this.httpClient.post<any>(this.fullUrl + '/kitchen/purchase/change-products', object);
    }

    acceptOrder(object: any): Observable<any> {
        return this.httpClient.post<any>(this.fullUrl + '/kitchen/purchase/accept', object);
    }

    cancellOrder(object: any): Observable<any> {
        return this.httpClient.post<any>(this.fullUrl + '/kitchen/purchase/accept', object);
    }

    finishOrder(object: any): Observable<any> {
        return this.httpClient.post<any>(this.fullUrl + '/kitchen/purchase/accept', object);
    }

}
