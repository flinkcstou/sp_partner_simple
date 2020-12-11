import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderServiceController {
    fullUrl = environment.apiUrl + '/orders/api/v1/order';

    constructor(private httpClient: HttpClient) {
    }

    getAllOrders(page, size, sortBy, search): Observable<any> {
        if (!search) {
            search = '';
        }
        if (!page) {
            page = 0;
        }
        if (!sortBy) {
            sortBy = 'desc-createdAt';
        }
        if (!size) {
            size = 100;
        }
        return this.httpClient.get<any>(this.fullUrl + '/module/all', {
            params: {
                page,
                size,
                sortBy,
                search,
            },
        });
    }

    getTotalBrandTransactions(): Observable<any> {
        return this.httpClient.get<any>( this.fullUrl + '/module/count');
    }
}
