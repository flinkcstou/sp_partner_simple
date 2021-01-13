import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageLocalService} from '../services/storage-local.service';

@Injectable({
    providedIn: 'root',
})
export class PromoServiceController {
    fullUrl = environment.apiUrl + '/marketing/api/v1';
    brandId: number;

    constructor(private httpClient: HttpClient,
                private storageLocalService: StorageLocalService) {
        this.brandId = storageLocalService.getBrand().id;
    }

    getActiveUsersPromocodes(userId: number) {
        return this.httpClient.get<any>(
            this.fullUrl + `/promocodes/brand/${this.brandId}/user/${userId}`);
    }

    activateUserPromocode(object) {
        return this.httpClient.post<any>(this.fullUrl + '/activatepromocode', object);
    }

    // qrPost(qrRequest: any): Observable<any> {
    //     //todo set request and response model
    //     return this.httpClient.post<AuthResponse>(this.fullUrl, qrRequest);
    // }
}
