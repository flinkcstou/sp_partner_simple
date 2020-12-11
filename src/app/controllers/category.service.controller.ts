import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryServiceController {
    fullUrl = environment.apiUrl + '/partners/api/brand/categories';

    constructor(private httpClient: HttpClient) {
    }

    getUserByQrAndPhone(phone: string, qr: string): Observable<any> {
        return this.httpClient.get<any>(this.fullUrl + '/find', {
            params: {
                phone,
                qr
            }
        })
    }

    getBrandCategories(): Observable<any> {
        return this.httpClient.get<any> (this.fullUrl + '/module');
    }

    // qrPost(qrRequest: any): Observable<any> {
    //     //todo set request and response model
    //     return this.httpClient.post<AuthResponse>(this.fullUrl, qrRequest);
    // }
}
